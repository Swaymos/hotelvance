"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Zap,
  Hotel,
  Network,
  RotateCcw,
  Server,
  ShieldCheck,
  Tv,
  Wifi,
  Phone,
  MapPin,
  AlertTriangle,
} from "lucide-react";

const initialForm = {
  hotelType: "",
  rooms: "",
  floors: "",
  location: "",
  infrastructure: "",
};

const hotelTypes = [
  {
    value: "boutique",
    label: "Boutique Hotel",
    description: "Smaller independent property",
  },
  {
    value: "business",
    label: "Business Hotel",
    description: "Corporate and business-focused property",
  },
  {
    value: "luxury",
    label: "Luxury Hotel",
    description: "Premium guest experience",
  },
  {
    value: "resort",
    label: "Resort",
    description: "Large property with leisure facilities",
  },
  {
    value: "serviced",
    label: "Serviced Apartments",
    description: "Extended-stay accommodation",
  },
];

const infrastructureOptions = [
  {
    value: "new",
    label: "New Build",
    description: "Building from the ground up",
  },
  {
    value: "partial",
    label: "Partially Installed",
    description: "Some technology is already installed",
  },
  {
    value: "existing",
    label: "Existing Infrastructure",
    description: "Currently operating hotel network",
  },
  {
    value: "upgrade",
    label: "Technology Upgrade",
    description: "Replacing or improving an existing system",
  },
];

export default function HotelTechnologyAudit() {
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

  const calculateRequirements = () => {
    const rooms = Number(form.rooms);
    const floors = Number(form.floors);

    if (!rooms || !floors) {
      return null;
    }

    /*
     * Preliminary planning assumptions.
     *
     * These are intentionally estimates rather than engineering
     * specifications. A professional site survey should be used
     * before final procurement.
     */

    let apMin = Math.ceil(rooms * 0.35);
    let apMax = Math.ceil(rooms * 0.5);

    // Larger hotels normally require additional AP density.
    if (rooms >= 200) {
      apMin = Math.ceil(rooms * 0.4);
      apMax = Math.ceil(rooms * 0.55);
    }

    // Smaller boutique properties can sometimes use fewer APs.
    if (rooms <= 50) {
      apMin = Math.ceil(rooms * 0.3);
      apMax = Math.ceil(rooms * 0.45);
    }

    /*
     * Floor-based adjustment.
     */
    if (floors >= 8) {
      apMin += Math.ceil(floors * 0.5);
      apMax += floors;
    }

    /*
     * Switch calculations.
     *
     * A simple planning estimate using 24-port switches.
     */
    const switchesMin = Math.max(1, Math.ceil(apMin / 24));

    const switchesMax = Math.max(1, Math.ceil(apMax / 24) + 1);

    /*
     * Technology recommendations.
     */
    const fiberRecommended =
      form.infrastructure === "new" ||
      form.infrastructure === "upgrade" ||
      rooms >= 100;

    const iptvRecommended =
      form.hotelType === "luxury" || form.hotelType === "resort" || rooms >= 80;

    const voipRecommended =
      form.hotelType === "business" ||
      form.hotelType === "luxury" ||
      rooms >= 100;

    const pmsRecommended = true;

    /*
     * Infrastructure risk.
     */
    let risk = "LOW";

    if (form.infrastructure === "existing" && rooms >= 150) {
      risk = "HIGH";
    } else if (
      form.infrastructure === "partial" ||
      form.infrastructure === "upgrade" ||
      rooms >= 100
    ) {
      risk = "MEDIUM";
    }

    if (floors >= 10 && risk === "LOW") {
      risk = "MEDIUM";
    }

    return {
      rooms,
      floors,
      accessPoints: `${apMin}–${apMax}`,
      switches: `${switchesMin}–${switchesMax}`,
      fiber: fiberRecommended,
      guestWifi: "Enterprise",
      iptv: iptvRecommended,
      voip: voipRecommended,
      pms: pmsRecommended,
      risk,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const calculated = calculateRequirements();

    if (!calculated) return;

    setResult(calculated);

    setTimeout(() => {
      document.getElementById("audit-results")?.scrollIntoView({
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
              <Network size={16} />
              Free Hotel Technology Calculator
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Estimate your hotel technology requirements
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Tell us a few details about your property and get a preliminary
              estimate of the technology infrastructure your hotel may need.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300">
              <Feature text="Wi-Fi access points" />
              <Feature text="Network switches" />
              <Feature text="Fiber backbone" />
              <Feature text="IPTV & VoIP" />
              <Feature text="PMS integration" />
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
              Hotel assessment
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Tell us about your property
            </h2>

            <p className="mt-2 text-slate-500">
              The assessment takes less than two minutes.
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
          {/* PROPERTY TYPE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Hotel}
              title="What type of property are you building or operating?"
              description="Choose the option that best describes your hotel."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hotelTypes.map((type) => (
                <ChoiceCard
                  key={type.value}
                  selected={form.hotelType === type.value}
                  onClick={() => updateField("hotelType", type.value)}
                  icon={Building2}
                  title={type.label}
                  description={type.description}
                />
              ))}
            </div>
          </div>

          {/* PROPERTY SIZE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Building2}
              title="Property size"
              description="Help us estimate your network requirements."
            />

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <Input
                label="Number of rooms"
                type="number"
                placeholder="e.g. 120"
                value={form.rooms}
                onChange={(event) => updateField("rooms", event.target.value)}
                required
              />

              <Input
                label="Number of floors"
                type="number"
                placeholder="e.g. 6"
                value={form.floors}
                onChange={(event) => updateField("floors", event.target.value)}
                required
              />
            </div>
          </div>

          {/* LOCATION */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={MapPin}
              title="Hotel location"
              description="Tell us where the property is located."
            />

            <div className="mt-7">
              <Input
                label="City / Location"
                placeholder="e.g. Abuja, Nigeria"
                value={form.location}
                onChange={(event) =>
                  updateField("location", event.target.value)
                }
                required
              />
            </div>
          </div>

          {/* INFRASTRUCTURE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Server}
              title="Existing infrastructure"
              description="What is the current stage of your technology infrastructure?"
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {infrastructureOptions.map((option) => (
                <ChoiceCard
                  key={option.value}
                  selected={form.infrastructure === option.value}
                  onClick={() => updateField("infrastructure", option.value)}
                  icon={Network}
                  title={option.label}
                  description={option.description}
                />
              ))}
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={
              !form.hotelType ||
              !form.rooms ||
              !form.floors ||
              !form.location ||
              !form.infrastructure
            }
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
          >
            Calculate My Technology Requirements
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
          id="audit-results"
          className="border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                Your preliminary estimate
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Estimated Hotel Technology Requirements
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Based on the property information you provided, here is a
                preliminary technology requirement estimate.
              </p>
            </div>

            {/* PROPERTY SUMMARY */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <SummaryItem label="Rooms" value={result.rooms} />

              <SummaryItem label="Floors" value={result.floors} />
            </div>

            {/* TECHNOLOGY GRID */}
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <TechnologyRow
                icon={Wifi}
                title="Wi-Fi Access Points"
                value={result.accessPoints}
              />

              <TechnologyRow
                icon={Network}
                title="Network Switches"
                value={result.switches}
              />

              <TechnologyRow
                icon={Zap}
                title="Fiber Backbone"
                value={result.fiber ? "Recommended" : "Review Required"}
              />

              <TechnologyRow
                icon={ShieldCheck}
                title="Guest Wi-Fi"
                value={result.guestWifi}
              />

              <TechnologyRow
                icon={Tv}
                title="IPTV"
                value={result.iptv ? "Recommended" : "Optional"}
              />

              <TechnologyRow
                icon={Phone}
                title="VoIP"
                value={result.voip ? "Recommended" : "Optional"}
              />

              <TechnologyRow
                icon={Network}
                title="PMS Integration"
                value={result.pms ? "Recommended" : "Optional"}
              />
            </div>

            {/* RISK */}
            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                  <AlertTriangle size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Infrastructure Risk
                  </p>

                  <p
                    className={`mt-1 text-2xl font-bold ${
                      result.risk === "HIGH"
                        ? "text-red-600"
                        : result.risk === "MEDIUM"
                        ? "text-amber-600"
                        : "text-emerald-600"
                    }`}
                  >
                    {result.risk}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    This is a preliminary planning indicator based on the
                    information entered above.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Take the next step
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Want a detailed technology bill of quantities?
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Get a professional Hotevance technology assessment for your
                  property. We can evaluate your infrastructure and develop a
                  detailed technology plan based on your hotel's requirements.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
                  >
                    Request a Free Assessment
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
                    Start Again
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
                These figures are preliminary planning estimates and should not
                be treated as final engineering specifications. Actual
                requirements depend on building layout, wall construction, room
                dimensions, user density, network design, equipment selection
                and a professional site survey.
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

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2 size={17} className="text-cyan-400" />

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

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        min={type === "number" ? 1 : undefined}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
      />
    </label>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function TechnologyRow({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-slate-100 p-5 last:border-b-0 sm:p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-cyan-50 p-3 text-cyan-600">
          <Icon size={20} />
        </div>

        <span className="font-medium text-slate-700">{title}</span>
      </div>

      <div className="flex items-center gap-2 text-right">
        <span className="font-bold text-slate-950">{value}</span>

        <ChevronRight size={17} className="hidden text-slate-300 sm:block" />
      </div>
    </div>
  );
}
