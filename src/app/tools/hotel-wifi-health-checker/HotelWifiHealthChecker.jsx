"use client";

import { useMemo, useState } from "react";
import {
  Wifi,
  Building2,
  Gauge,
  Router,
  MessageCircleWarning,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Tv,
  Phone,
} from "lucide-react";

const initialForm = {
  rooms: "",
  floors: "",
  hotelSize: "",
  internetSpeed: "",
  accessPoints: "",
  complaints: "",
  deadZones: "",
  networkSeparated: "",
  outdoorWifi: "",
  iptvVoip: "",
};

export default function HotelWifiHealthChecker() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateScore = () => {
    let score = 100;
    const risks = [];
    const positives = [];

    const rooms = Number(form.rooms) || 0;
    const floors = Number(form.floors) || 0;
    const speed = Number(form.internetSpeed) || 0;
    const accessPoints = Number(form.accessPoints) || 0;
    const complaints = Number(form.complaints) || 0;

    // Room/AP coverage
    if (rooms > 0 && accessPoints > 0) {
      const apRatio = rooms / accessPoints;

      if (apRatio > 6) {
        score -= 25;
        risks.push("Insufficient access-point coverage");
      } else if (apRatio > 4) {
        score -= 12;
        risks.push("Access-point coverage may need improvement");
      } else {
        positives.push("Access-point density appears reasonable");
      }
    } else if (rooms > 0 && accessPoints === 0) {
      score -= 30;
      risks.push("No access points reported");
    }

    // Internet bandwidth
    if (rooms > 0 && speed > 0) {
      const MbpsPerRoom = speed / rooms;

      if (MbpsPerRoom < 2) {
        score -= 20;
        risks.push("Internet bandwidth may be insufficient during peak usage");
      } else if (MbpsPerRoom < 5) {
        score -= 8;
        risks.push("Internet bandwidth may become constrained at peak times");
      } else {
        positives.push("Internet bandwidth appears adequate");
      }
    }

    // Complaints
    if (complaints >= 20) {
      score -= 20;
      risks.push("High volume of weekly Wi-Fi complaints");
    } else if (complaints >= 10) {
      score -= 10;
      risks.push("Wi-Fi complaints indicate possible network issues");
    } else if (complaints <= 3) {
      positives.push("Low reported Wi-Fi complaint volume");
    }

    // Dead zones
    if (form.deadZones === "yes") {
      score -= 15;
      risks.push("Wi-Fi dead zones are present");
    } else if (form.deadZones === "no") {
      positives.push("No Wi-Fi dead zones reported");
    }

    // Guest/staff network separation
    if (form.networkSeparated === "no") {
      score -= 12;
      risks.push("Guest and staff traffic should be separated");
    } else if (form.networkSeparated === "yes") {
      positives.push("Guest and staff networks are separated");
    }

    // Outdoor coverage
    if (form.outdoorWifi === "yes") {
      if (accessPoints < Math.max(1, Math.ceil(rooms / 5))) {
        score -= 5;
        risks.push("Outdoor Wi-Fi may require dedicated coverage");
      }
    }

    // IPTV / VoIP
    if (form.iptvVoip === "yes") {
      if (speed < rooms * 3) {
        score -= 8;
        risks.push(
          "IPTV/VoIP traffic may require better network capacity and QoS"
        );
      } else {
        positives.push("Network should be planned for IPTV/VoIP traffic");
      }
    }

    // Floor count
    if (floors >= 8 && accessPoints > 0 && accessPoints < floors * 4) {
      score -= 5;
      risks.push(
        "Large multi-floor deployment may require additional AP planning"
      );
    }

    score = Math.max(0, Math.min(100, score));

    let level = "Low";
    let levelClass = "text-emerald-600 bg-emerald-50";
    let description =
      "Your hotel Wi-Fi setup appears to have a relatively low risk level.";

    if (score < 50) {
      level = "High";
      levelClass = "text-red-600 bg-red-50";
      description =
        "Your hotel Wi-Fi network has several areas that could negatively affect guest experience.";
    } else if (score < 75) {
      level = "Medium";
      levelClass = "text-amber-600 bg-amber-50";
      description =
        "Your hotel Wi-Fi has some areas that should be reviewed before they become larger problems.";
    }

    return {
      score,
      level,
      levelClass,
      description,
      risks,
      positives,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(calculateScore());

    setTimeout(() => {
      document
        .getElementById("wifi-results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const reset = () => {
    setForm(initialForm);
    setResult(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const progress = useMemo(() => {
    const fields = Object.values(form);
    const completed = fields.filter(Boolean).length;

    return Math.round((completed / fields.length) * 100);
  }, [form]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <Wifi size={16} />
              Free Hotel Wi-Fi Assessment
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              How healthy is your hotel Wi-Fi?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Answer a few questions about your hotel network and get an instant
              Wi-Fi health score, potential risks, and practical areas to
              improve.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-cyan-400" size={18} />
                Free assessment
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-cyan-400" size={18} />
                No technical expertise required
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-cyan-400" size={18} />
                Instant results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
              Step 1
            </p>
            <h2 className="mt-1 text-2xl font-bold">
              Tell us about your hotel
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-sm text-slate-500">Assessment completed</p>
            <p className="text-lg font-bold text-slate-900">{progress}%</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* HOTEL DETAILS */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                <Building2 size={22} />
              </div>

              <div>
                <h3 className="font-bold">Hotel details</h3>
                <p className="text-sm text-slate-500">
                  Basic information about your property
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Number of rooms"
                type="number"
                placeholder="e.g. 120"
                value={form.rooms}
                onChange={(e) => updateField("rooms", e.target.value)}
                required
              />

              <Input
                label="Number of floors"
                type="number"
                placeholder="e.g. 6"
                value={form.floors}
                onChange={(e) => updateField("floors", e.target.value)}
                required
              />

              <Select
                label="Approximate hotel size"
                value={form.hotelSize}
                onChange={(e) => updateField("hotelSize", e.target.value)}
                options={[
                  ["small", "Small — under 50 rooms"],
                  ["medium", "Medium — 50–150 rooms"],
                  ["large", "Large — 151–300 rooms"],
                  ["enterprise", "Large — 300+ rooms"],
                ]}
              />

              <Input
                label="Current internet speed"
                type="number"
                placeholder="e.g. 500"
                suffix="Mbps"
                value={form.internetSpeed}
                onChange={(e) => updateField("internetSpeed", e.target.value)}
                required
              />
            </div>
          </div>

          {/* NETWORK */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                <Router size={22} />
              </div>

              <div>
                <h3 className="font-bold">Wi-Fi infrastructure</h3>
                <p className="text-sm text-slate-500">
                  Tell us about your current network
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Number of Wi-Fi access points"
                type="number"
                placeholder="e.g. 45"
                value={form.accessPoints}
                onChange={(e) => updateField("accessPoints", e.target.value)}
                required
              />

              <Input
                label="Wi-Fi complaints per week"
                type="number"
                placeholder="e.g. 8"
                value={form.complaints}
                onChange={(e) => updateField("complaints", e.target.value)}
                required
              />

              <RadioGroup
                label="Do you have Wi-Fi dead zones?"
                value={form.deadZones}
                onChange={(value) => updateField("deadZones", value)}
                options={[
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["unsure", "Not sure"],
                ]}
              />

              <RadioGroup
                label="Are guest and staff networks separated?"
                value={form.networkSeparated}
                onChange={(value) => updateField("networkSeparated", value)}
                options={[
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["unsure", "Not sure"],
                ]}
              />

              <RadioGroup
                label="Do outdoor areas require Wi-Fi?"
                value={form.outdoorWifi}
                onChange={(value) => updateField("outdoorWifi", value)}
                options={[
                  ["yes", "Yes"],
                  ["no", "No"],
                ]}
              />

              <RadioGroup
                label="Is IPTV or VoIP currently running?"
                value={form.iptvVoip}
                onChange={(value) => updateField("iptvVoip", value)}
                options={[
                  ["yes", "Yes"],
                  ["no", "No"],
                ]}
              />
            </div>
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
          >
            Check My Hotel Wi-Fi
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>
      </section>

      {/* RESULTS */}
      {result && (
        <section
          id="wifi-results"
          className="border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Your assessment
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Your Hotel Wi-Fi Risk Score
              </h2>
            </div>

            {/* SCORE */}
            <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-cyan-100 bg-white shadow-sm">
                <div>
                  <span className="block text-5xl font-bold text-slate-950">
                    {result.score}
                  </span>
                  <span className="text-sm text-slate-500">/ 100</span>
                </div>
              </div>

              <div
                className={`mx-auto mt-6 inline-flex rounded-full px-4 py-2 text-sm font-bold ${result.levelClass}`}
              >
                {result.level} Risk
              </div>

              <p className="mx-auto mt-5 max-w-md text-slate-600">
                {result.description}
              </p>
            </div>

            {/* FINDINGS */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <ResultCard
                title="Potential risks"
                icon={AlertTriangle}
                items={result.risks}
                emptyText="No major risks were identified from your answers."
                danger
              />

              <ResultCard
                title="Positive indicators"
                icon={ShieldCheck}
                items={result.positives}
                emptyText="There were not enough positive indicators to report."
              />
            </div>

            {/* CTA */}
            <div className="mt-10 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Need a deeper assessment?
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Get Your Free Hotel Wi-Fi Audit
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Our team can review your hotel&apos;s Wi-Fi requirements,
                  coverage, capacity, network design and guest experience to
                  identify practical improvements.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/hotel-wifi-audit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
                  >
                    Request a Free Wi-Fi Audit
                    <ArrowRight size={18} />
                  </a>

                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    <RotateCcw size={18} />
                    Check Again
                  </button>
                </div>
              </div>
            </div>

            {/* DISCLAIMER */}
            <p className="mt-8 text-center text-xs leading-5 text-slate-500">
              This assessment provides a preliminary indication based on the
              information you provide. It is not a substitute for a professional
              Wi-Fi site survey, predictive survey or detailed network
              assessment.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

/* -------------------------------- */
/* REUSABLE COMPONENTS              */
/* -------------------------------- */

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  suffix,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          min={type === "number" ? "0" : undefined}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      <select
        value={value}
        onChange={onChange}
        required
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
      >
        <option value="">Select an option</option>

        {options.map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

function RadioGroup({ label, value, onChange, options }) {
  return (
    <div>
      <span className="mb-3 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      <div className="flex flex-wrap gap-3">
        {options.map(([optionValue, optionLabel]) => {
          const active = value === optionValue;

          return (
            <button
              key={optionValue}
              type="button"
              onClick={() => onChange(optionValue)}
              className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                active
                  ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {optionLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultCard({ title, icon: Icon, items, emptyText, danger = false }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`rounded-xl p-3 ${
            danger ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
          }`}
        >
          <Icon size={21} />
        </div>

        <h3 className="font-bold">{title}</h3>
      </div>

      <div className="mt-6 space-y-3">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex gap-3 rounded-xl bg-slate-50 p-4"
            >
              {danger ? (
                <AlertTriangle
                  size={18}
                  className="mt-0.5 shrink-0 text-amber-500"
                />
              ) : (
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
              )}

              <span className="text-sm leading-6 text-slate-600">{item}</span>
            </div>
          ))
        ) : (
          <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
            {emptyText}
          </p>
        )}
      </div>
    </div>
  );
}
