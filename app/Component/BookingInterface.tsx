"use client";
import React, { useState } from "react";

// Define styles as a constants object
const styles = {
  container: "lg:w-1/3 lg:pl-8 mt-8 lg:mt-0",
  card: "border p-4 rounded-lg shadow-lg",
  price: "text-2xl font-bold mb-4",
  inputGroup: "mb-4 sm:mb-0 sm:mr-2",
  label: "block text-gray-700",
  input: "border rounded p-2 w-full",
  button: "bg-pink-500 text-white py-2 px-4 rounded w-full",
  notice: "text-gray-600 text-sm mt-2",
  priceBreakdown: "mt-4",
  priceRow: "flex justify-between",
  totalPriceRow: "flex justify-between font-bold",
};

interface props {
  perNightPrice: number;
  cleaningFee: number;
  serviceFee: number;
}

const BookingInterface = ({
  perNightPrice,
  cleaningFee,
  serviceFee,
}: props) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests]: [number, any] = useState(1);

  const calculateTotalPrice = () => {
    const nights = calculateNights();
    return perNightPrice * nights + cleaningFee + serviceFee;
  };

  const calculateNights = (): number => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn: Date = new Date(checkInDate);
    const checkOut: Date = new Date(checkOutDate);
    const diffTime: number = Math.abs(checkOut.getTime() - checkIn.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.price}>${perNightPrice} / night</div>
        <div className={styles.inputGroup}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Check-in</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Check-out</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Guests</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(Math.max(1, Number(e.target.value)))}
            className={styles.input}
            min="1"
            max="10"
          />
        </div>
        <button className={styles.button}>Reserve</button>
        <p className={styles.notice}>You won't be charged yet</p>
        <div className={styles.priceBreakdown}>
          <div className={styles.priceRow}>
            <span>
              ${perNightPrice} x {calculateNights()} nights
            </span>
            <span>${perNightPrice * calculateNights()}</span>
          </div>
          <div className={styles.priceRow}>
            <span>Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className={styles.priceRow}>
            <span>Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className={styles.totalPriceRow}>
            <span>Total before taxes</span>
            <span>${calculateTotalPrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInterface;
