"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Gauge,
  HelpCircle,
  Laptop,
  PlayCircle,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Users,
  Wifi,
} from "lucide-react";

const initialForm = {
  rooms: "",
  guestsPerRoom: "",
  devicesPerGuest: "",
  occupancy: "",
  streaming: "",
};

const streamingOptions = [
  {
    value: "low",
    label: "Low",
    description: "Mostly browsing, messaging and email",
  },
  {
    value: "medium",
    label: "Medium",
    description: "Some video streaming and social media",
  },
  {
    value: "high",
    label: "High",
    description: "Frequent HD/4K streaming and video calls",
  },
];

export default function HotelWifiBandwidthCalculator() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const completion = useMemo(() => {
    const values = Object.values(form);
    const completed = values.filter(Boolean).length;

    return Math.round((completed / values.length) * 100);
  }, [form]);

  const calculateBandwidth = () => {
    const rooms = Number(form.rooms);
    const guestsPerRoom = Number(form.guestsPerRoom);
    const devicesPerGuest = Number(form.devicesPerGuest);
    const occupancy = Number(form.occupancy);

    if (
      !rooms ||
      !guestsPerRoom ||
      !devicesPerGuest ||
      !occupancy ||
      !form.streaming
    ) {
      return null;
    }

    /*
     * Estimate peak connected devices.
     *
     * Example:
     * 100 rooms
     * 2 guests/room
     * 2 devices/guest
     * 80% occupancy
     *
     * = 320 potential connected devices
     */

    const peakGuests = Math.ceil(rooms * guestsPerRoom * (occupancy / 100));

    const peakDevices = Math.ceil(peakGuests * devicesPerGuest);

    /*
     * Estimated bandwidth per active device.
     *
     * These are planning assumptions rather than
     * guaranteed real-world consumption figures.
     */

    const bandwidthPerDevice = {
      low: 1.2,
      medium: 2.0,
      high: 3.0,
    };

    const mbps = peakDevices * bandwidthPerDevice[form.streaming];

    /*
     * Add headroom for:
     *
     * - Protocol overhead
     * - Traffic bursts
     * - Staff usage
     * - Network services
     * - IPTV / VoIP
     * - Future growth
     */

    const withHeadroom = mbps * 1.4;

    /*
     * Round to useful service tiers.
     */

    let recommendedMin;
    let recommendedMax;

    if (withHeadroom <= 100) {
      recommendedMin = 100;
      recommendedMax = 150;
    } else if (withHeadroom <= 200) {
      recommendedMin = 200;
      recommendedMax = 300;
    } else if (withHeadroom <= 350) {
      recommendedMin = 300;
      recommendedMax = 500;
    } else if (withHeadroom <= 500) {
      recommendedMin = 500;
      recommendedMax = 700;
    } else if (withHeadroom <= 750) {
      recommendedMin = 700;
      recommendedMax = 1000;
    } else if (withHeadroom <= 1000) {
      recommendedMin = 1000;
      recommendedMax = 1500;
    } else if (withHeadroom <= 1500) {
      recommendedMin = 1500;
      recommendedMax = 2000;
    } else {
      recommendedMin = Math.ceil(withHeadroom / 500) * 500;

      recommendedMax = recommendedMin + 500;
    }

    /*
     * Enterprise Wi-Fi recommendation.
     *
     * Hotels with substantial concurrent usage should
     * use an enterprise-grade wireless infrastructure.
     */

    const enterpriseWifi = peakDevices >= 50 || form.streaming === "high";

    /*
     * QoS becomes particularly important when there is
     * heavy video, voice or other latency-sensitive traffic.
     */

    const qosRecommended =
      form.streaming === "medium" || form.streaming === "high";

    /*
     * Network load classification.
     */

    let networkLoad = "Low";
    let networkLoadClass = "bg-emerald-50 text-emerald-700";

    if (peakDevices >= 250) {
      networkLoad = "High";
      networkLoadClass = "bg-red-50 text-red-700";
    } else if (peakDevices >= 100) {
      networkLoad = "Medium";
      networkLoadClass = "bg-amber-50 text-amber-700";
    }

    /*
     * Calculate approximate bandwidth before
     * headroom for transparency.
     */

    const estimatedUsage = Math.ceil(mbps);

    return {
      rooms,
      guestsPerRoom,
      devicesPerGuest,
      occupancy,
      peakGuests,
      peakDevices,
      estimatedUsage,
      recommendedMin,
      recommendedMax,
      enterpriseWifi,
      qosRecommended,
      networkLoad,
      networkLoadClass,
      streaming: form.streaming,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const calculated = calculateBandwidth();

    if (!calculated) return;

    setResult(calculated);

    setTimeout(() => {
      document.getElementById("bandwidth-results")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <Gauge size={16} />
              Free Hotel Bandwidth Calculator
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              How much internet bandwidth does your hotel need?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Estimate your hotel&apos;s peak connected devices and get a
              recommended internet capacity based on occupancy, guest devices
              and streaming demand.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300">
              <HeroFeature icon={Users} text="Peak guest calculation" />

              <HeroFeature icon={Wifi} text="Bandwidth recommendation" />

              <HeroFeature
                icon={ShieldCheck}
                text="Enterprise Wi-Fi guidance"
              />

              <HeroFeature icon={Gauge} text="QoS recommendation" />
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
              Bandwidth assessment
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Tell us about your hotel
            </h2>

            <p className="mt-2 text-slate-500">
              Enter your typical hotel usage to estimate peak demand.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Progress
            </p>

            <p className="mt-1 text-xl font-bold">{completion}%</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* HOTEL SIZE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Wifi}
              title="Hotel size"
              description="Start with the number of rooms in your property."
            />

            <div className="mt-7">
              <Input
                label="Number of rooms"
                type="number"
                placeholder="e.g. 100"
                value={form.rooms}
                onChange={(event) => updateField("rooms", event.target.value)}
                required
              />
            </div>
          </div>

          {/* GUEST USAGE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Users}
              title="Guest usage"
              description="Tell us how many guests and devices you typically need to support."
            />

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <Input
                label="Average guests per room"
                type="number"
                placeholder="e.g. 2"
                value={form.guestsPerRoom}
                onChange={(event) =>
                  updateField("guestsPerRoom", event.target.value)
                }
                required
              />

              <Input
                label="Average devices per guest"
                type="number"
                placeholder="e.g. 2"
                value={form.devicesPerGuest}
                onChange={(event) =>
                  updateField("devicesPerGuest", event.target.value)
                }
                required
              />

              <Input
                label="Peak occupancy"
                type="number"
                placeholder="e.g. 80"
                suffix="%"
                min={1}
                max={100}
                value={form.occupancy}
                onChange={(event) =>
                  updateField("occupancy", event.target.value)
                }
                required
              />
            </div>
          </div>

          {/* STREAMING */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={PlayCircle}
              title="Streaming usage"
              description="How heavily do guests use video and bandwidth-intensive services?"
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {streamingOptions.map((option) => (
                <ChoiceCard
                  key={option.value}
                  selected={form.streaming === option.value}
                  onClick={() => updateField("streaming", option.value)}
                  title={option.label}
                  description={option.description}
                  icon={
                    option.value === "high"
                      ? PlayCircle
                      : option.value === "medium"
                      ? Smartphone
                      : Laptop
                  }
                />
              ))}
            </div>
          </div>

          {/* EXPLANATION */}
          <div className="flex gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
            <HelpCircle size={20} className="mt-0.5 shrink-0 text-cyan-600" />

            <p className="text-sm leading-6 text-cyan-900">
              Your hotel&apos;s internet requirement is influenced by more than
              the number of rooms. Guest devices, occupancy and simultaneous
              streaming activity can significantly affect peak demand.
            </p>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={
              !form.rooms ||
              !form.guestsPerRoom ||
              !form.devicesPerGuest ||
              !form.occupancy ||
              !form.streaming
            }
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
          >
            Calculate My Bandwidth Requirement
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
          id="bandwidth-results"
          className="border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                Your bandwidth assessment
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Estimated Peak Network Demand
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Here&apos;s an estimate based on the hotel information you
                provided.
              </p>
            </div>

            {/* MAIN RESULT */}
            <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-slate-950 p-8 text-center text-white shadow-xl sm:p-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Gauge size={38} />
              </div>

              <p className="mt-6 text-sm font-medium uppercase tracking-widest text-slate-400">
                Recommended internet capacity
              </p>

              <div className="mt-3 text-4xl font-bold sm:text-5xl">
                {result.recommendedMin}–{result.recommendedMax}
                <span className="ml-2 text-xl font-medium text-slate-400">
                  Mbps
                </span>
              </div>

              <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-slate-400">
                This recommendation includes additional capacity above estimated
                peak usage to provide operational headroom.
              </p>
            </div>

            {/* DEVICE STATISTICS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StatCard
                icon={Users}
                label="Peak guests"
                value={result.peakGuests}
              />

              <StatCard
                icon={Smartphone}
                label="Peak connected devices"
                value={result.peakDevices}
              />

              <StatCard
                icon={Gauge}
                label="Estimated bandwidth usage"
                value={`${result.estimatedUsage} Mbps`}
              />
            </div>

            {/* NETWORK LOAD */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-slate-500">
                    Estimated network load
                  </p>

                  <p className="mt-1 text-xl font-bold">{result.networkLoad}</p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${result.networkLoadClass}`}
                >
                  {result.networkLoad} Load
                </span>
              </div>
            </div>

            {/* RECOMMENDATIONS */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <RecommendationCard
                icon={Wifi}
                title="Enterprise Wi-Fi"
                recommended={result.enterpriseWifi}
                description={
                  result.enterpriseWifi
                    ? "Recommended for your estimated guest device density and usage."
                    : "Your estimated device count may allow for a less intensive deployment."
                }
              />

              <RecommendationCard
                icon={ShieldCheck}
                title="Quality of Service"
                recommended={result.qosRecommended}
                description={
                  result.qosRecommended
                    ? "QoS is recommended to prioritize important traffic during busy periods."
                    : "QoS may be less critical at your estimated usage level, but can still be useful."
                }
              />
            </div>

            {/* WHY BANDWIDTH MATTERS */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex gap-4">
                <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
                  <Wifi size={22} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Why hotels need more than fast internet
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Simply purchasing the fastest available internet connection
                    does not guarantee a good guest Wi-Fi experience. Your
                    network also needs sufficient wireless capacity, appropriate
                    access-point placement, traffic management and reliable
                    network infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Need a professional assessment?
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Let Hotevance assess your hotel network
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Our team can assess your hotel&apos;s Wi-Fi coverage,
                  bandwidth requirements, network architecture and guest
                  connectivity needs.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/hotel-wifi-audit"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
                  >
                    Get Your Free Hotel Wi-Fi Audit
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    <RotateCcw size={18} />
                    Calculate Again
                  </button>
                </div>
              </div>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-8 flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <AlertTriangle
                size={18}
                className="mt-0.5 shrink-0 text-slate-400"
              />

              <p className="text-xs leading-5 text-slate-500">
                This calculator provides a preliminary bandwidth estimate based
                on the information entered. Actual bandwidth requirements vary
                depending on applications, network architecture, guest behavior,
                IPTV, VoIP, staff traffic, caching, content delivery and other
                factors. It should not replace a professional network
                assessment.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* -------------------------------- */
/* COMPONENTS                       */
/* -------------------------------- */

function HeroFeature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={17} className="text-cyan-400" />

      <span>{text}</span>
    </div>
  );
}

function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
        <Icon size={21} />
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>

        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  suffix,
  min,
  max,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          min={min !== undefined ? min : type === "number" ? 1 : undefined}
          max={max}
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

function ChoiceCard({ selected, onClick, icon: Icon, title, description }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative rounded-2xl border p-5 text-left transition ${
        selected
          ? "border-cyan-500 bg-cyan-50 ring-2 ring-cyan-500/10"
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`rounded-xl p-3 ${
            selected ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-600"
          }`}
        >
          <Icon size={20} />
        </div>

        {selected && <CheckCircle2 size={20} className="text-cyan-600" />}
      </div>

      <h4 className="mt-4 font-semibold">{title}</h4>

      <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
    </button>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
          <Icon size={20} />
        </div>

        <p className="text-sm text-slate-500">{label}</p>
      </div>

      <p className="mt-4 text-2xl font-bold text-slate-950">{value}</p>
    </div>
  );
}

function RecommendationCard({ icon: Icon, title, recommended, description }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
          <Icon size={22} />
        </div>

        <span
          className={`rounded-full px-3 py-1.5 text-xs font-bold ${
            recommended
              ? "bg-emerald-50 text-emerald-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {recommended ? "Recommended" : "Optional"}
        </span>
      </div>

      <h3 className="mt-5 font-bold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}
