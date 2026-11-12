"use client";

import React, { useMemo, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

interface PaymentButtonProps {
  email: string;
  amount: number; // in pesewas
  onSuccess: () => void;
}

export default function PaymentButton({ email, amount, onSuccess }: PaymentButtonProps) {
  const [isInitializing, setIsInitializing] = useState(false);

  const formattedAmount = (amount / 100).toLocaleString();

  const paystackConfig = useMemo(() => {
    return {
      reference: `FA_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
      email: email && email.includes('@') ? email : 'student@pathschool.io',
      amount: amount,
      publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_87b4fb2bd3c8c93db85af8dad85bbbfa0d94d869',
      currency: 'GHS',
    };
  }, [email, amount]);

  const initializePayment = usePaystackPayment(paystackConfig);

  const onClose = () => {
    setIsInitializing(false);
    console.log('Payment modal closed');
  };

  const handlePay = () => {
    setIsInitializing(true);
    try {
      const handler = initializePayment as any;
      if (typeof handler === 'function') {
        try {
          handler({
            onSuccess: () => {
              setIsInitializing(false);
              onSuccess();
            },
            onClose,
          });
        } catch {
          handler(
            () => {
              setIsInitializing(false);
              onSuccess();
            },
            onClose
          );
        }
      }
    } catch (err) {
      console.error('Payment launch error:', err);
      setIsInitializing(false);
      alert('Unable to open payment modal. Please verify your connection or pop-up blocker and try again.');
    }
  };

  return (
    <button
      type="button"
      onClick={handlePay}
      disabled={isInitializing}
      className="bg-[#16140f] hover:bg-[#6c3696] text-white py-4 px-8 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
    >
      {isInitializing ? 'Opening Payment...' : `Pay GH₵ ${formattedAmount} via Paystack`}
    </button>
  );
}
