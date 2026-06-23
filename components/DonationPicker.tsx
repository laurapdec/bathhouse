"use client";

import { useState } from "react";

const CAMPAIGN = "jb5Ekp";
const oneTimePresets = [10, 25, 50, 100, 250];
const monthlyPresets = [5, 10, 25, 50, 100];

export default function DonationPicker() {
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
  const [selected, setSelected] = useState<number | null>(25);
  const [custom, setCustom] = useState("");

  const presets = frequency === "monthly" ? monthlyPresets : oneTimePresets;
  const donationAmount = selected ?? (custom ? Number(custom) : null);

  function switchFrequency(f: "monthly" | "one-time") {
    setFrequency(f);
    setSelected(f === "monthly" ? 25 : 50);
    setCustom("");
  }

  function pickPreset(amt: number) {
    setSelected(amt);
    setCustom("");
  }

  function handleCustom(val: string) {
    const clean = val.replace(/[^0-9.]/g, "");
    setCustom(clean);
    setSelected(null);
  }

  function handleDonate() {
    if (!donationAmount || donationAmount <= 0) return;
    const params = new URLSearchParams({
      amount: String(donationAmount),
      frequency,
    });
    window.open(
      `https://givebutter.com/${CAMPAIGN}?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Frequency toggle */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => switchFrequency("one-time")}
          className={`relative rounded-2xl border-2 p-6 text-left transition-all ${
            frequency === "one-time"
              ? "border-terracotta bg-terracotta/10"
              : "border-sand bg-surface hover:border-terracotta/40"
          }`}
        >
          <p className="font-serif text-lg font-semibold text-ink">One-time gift</p>
          <p className="text-ink-mid text-sm mt-1">
            Every dollar helps keep our doors open.
          </p>
        </button>

        <button
          onClick={() => switchFrequency("monthly")}
          className={`relative rounded-2xl border-2 p-6 text-left transition-all ${
            frequency === "monthly"
              ? "border-terracotta bg-terracotta/10"
              : "border-sand bg-surface hover:border-terracotta/40"
          }`}
        >
          {/* Badge */}
          <span className="absolute -top-3 right-4 bg-terracotta text-cream text-[11px] font-semibold tracking-wide uppercase px-3 py-0.5 rounded-full">
            Most impactful
          </span>
          <p className="font-serif text-lg font-semibold text-ink">Monthly supporter</p>
          <p className="text-ink-mid text-sm mt-1">
            Steady support that lets us plan ahead and grow.
          </p>
        </button>
      </div>

      {/* Amount presets */}
      <div className="grid grid-cols-5 gap-3 mb-4">
        {presets.map((amt) => (
          <button
            key={amt}
            onClick={() => pickPreset(amt)}
            className={`rounded-xl py-3 text-center font-medium transition-all ${
              selected === amt
                ? "bg-terracotta text-cream shadow-md"
                : "bg-sand/60 text-ink hover:bg-sand"
            }`}
          >
            ${amt}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="relative mb-8">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-mid font-medium">
          $
        </span>
        <input
          type="text"
          inputMode="decimal"
          placeholder="Other amount"
          value={custom}
          onChange={(e) => handleCustom(e.target.value)}
          onFocus={() => setSelected(null)}
          className="w-full rounded-xl border-2 border-sand bg-surface pl-8 pr-4 py-3 text-ink placeholder:text-ink-light focus:border-terracotta focus:outline-none transition-colors"
        />
      </div>

      {/* Donate button */}
      <button
        onClick={handleDonate}
        disabled={!donationAmount || donationAmount <= 0}
        className="w-full rounded-full bg-terracotta text-cream font-semibold text-lg py-4 hover:bg-terracotta-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {donationAmount && donationAmount > 0
          ? frequency === "monthly"
            ? `Give $${donationAmount}/month`
            : `Give $${donationAmount}`
          : "Choose an amount"}
      </button>

      {frequency === "monthly" && (
        <p className="text-center text-ink-mid text-sm mt-4">
          Cancel or change your amount anytime. No commitment, just community.
        </p>
      )}

      <p className="text-center text-ink-light text-xs mt-6">
        Secure checkout powered by Givebutter. Bathhouse Arts Initiative is a
        501(c)(3)-pending organization.
      </p>
    </div>
  );
}
