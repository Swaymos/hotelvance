"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  EthernetPort,
  Zap,
  Gauge,
  Hotel,
  Network,
  RotateCcw,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const initialForm = {
  propertyType: "",
  rooms: "",
  floors: "",
  projectStage: "",
  distance: "",
  scalability: "",
  priority: "",
};

const propertyTypes = [
  {
    value: "boutique",
    label: "Boutique Hotel",
    description: "Smaller hotel with a compact network",
  },
  {
    value: "business",
    label: "Business Hotel",
    description: "Business-focused guest property",
  },
  {
    value: "luxury",
    label: "Luxury Hotel",
    description: "Premium guest experience",
  },
  {
    value: "resort",
    label: "Resort",
    description: "Large property with multiple facilities",
  },
  {
    value: "apartments",
    label: "Serviced Apartments",
    description: "Extended-stay accommodation",
  },
];

const projectStages = [
  {
    value: "new-build",
    label: "New Build",
    description: "The network is being designed from scratch",
  },
  {
    value: "renovation",
    label: "Major Renovation",
    description: "Existing infrastructure is being replaced",
  },
  {
    value: "upgrade",
    label: "Technology Upgrade",
    description: "Improving the existing network",
  },
  {
    value: "existing",
    label: "Existing Property",
    description: "Working around an operational network",
  },
];

const distanceOptions = [
  {
    value: "short",
    label: "Short",
    description: "Compact building / short cable runs",
  },
  {
    value: "medium",
    label: "Medium",
    description: "Typical multi-floor hotel",
  },
  {
    value: "long",
    label: "Long",
    description: "Large property or long distribution runs",
  },
];

const scalabilityOptions = [
  {
    value: "standard",
    label: "Standard",
    description: "Current requirements are the priority",
  },
  {
    value: "growth",
    label: "Future Growth",
    description: "Expect additional technology and users",
  },
  {
    value: "maximum",
    label: "Maximum Scalability",
    description: "Designing for long-term expansion",
  },
];

const priorityOptions = [
  {
    value: "cost",
    label: "Infrastructure Cost",
    description: "Keep deployment costs efficient",
  },
  {
    value: "simplicity",
    label: "Deployment Simplicity",
    description: "Prefer straightforward installation",
  },
  {
    value: "performance",
    label: "Performance",
    description: "Prioritize network performance",
  },
  {
    value: "future",
    label: "Future-Proofing",
    description: "Prepare for future technology",
  },
];

const comparison = [
  {
    feature: "Cabling",
    gpon: "Fiber",
    ethernet: "Copper / Fiber",
  },
  {
    feature: "Long distances",
    gpon: "Excellent",
    ethernet: "Moderate",
  },
  {
    feature: "Room-level deployment",
    gpon: "Excellent",
    ethernet: "Excellent",
  },
  {
    feature: "Infrastructure cost",
    gpon: "Lower at scale",
    ethernet: "Higher at scale",
  },
  {
    feature: "Maintenance",
    gpon: "Lower",
    ethernet: "Moderate",
  },
  {
    feature: "Future scalability",
    gpon: "Excellent",
    ethernet: "Excellent",
  },
];

export default function GponVsEthernet() {
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

  const calculateRecommendation = () => {
    const rooms = Number(form.rooms);
    const floors = Number(form.floors);

    if (
      !form.propertyType ||
      !rooms ||
      !floors ||
      !form.projectStage ||
      !form.distance ||
      !form.scalability ||
      !form.priority
    ) {
      return null;
    }

    let gponScore = 0;
    let ethernetScore = 0;

    /*
     * PROPERTY SIZE
     *
     * Larger hotel deployments tend to benefit more from
     * fiber distribution and centralized architecture.
     */

    if (rooms >= 150) {
      gponScore += 3;
    } else if (rooms >= 80) {
      gponScore += 2;
      ethernetScore += 1;
    } else {
      ethernetScore += 2;
    }

    /*
     * FLOOR COUNT
     */

    if (floors >= 8) {
      gponScore += 3;
    } else if (floors >= 4) {
      gponScore += 2;
      ethernetScore += 1;
    } else {
      ethernetScore += 2;
    }

    /*
     * PROPERTY TYPE
     */

    if (form.propertyType === "resort" || form.propertyType === "luxury") {
      gponScore += 2;
    }

    if (form.propertyType === "boutique") {
      ethernetScore += 1;
    }

    /*
     * PROJECT STAGE
     *
     * GPON is particularly attractive when cabling can
     * be designed from the beginning.
     */

    if (form.projectStage === "new-build") {
      gponScore += 4;
    }

    if (form.projectStage === "renovation") {
      gponScore += 3;
    }

    if (form.projectStage === "upgrade") {
      ethernetScore += 2;
    }

    if (form.projectStage === "existing") {
      ethernetScore += 3;
    }

    /*
     * DISTANCE
     */

    if (form.distance === "long") {
      gponScore += 4;
    }

    if (form.distance === "medium") {
      gponScore += 2;
      ethernetScore += 1;
    }

    if (form.distance === "short") {
      ethernetScore += 2;
    }

    /*
     * SCALABILITY
     */

    if (form.scalability === "growth") {
      gponScore += 2;
    }

    if (form.scalability === "maximum") {
      gponScore += 4;
    }

    if (form.scalability === "standard") {
      ethernetScore += 1;
    }

    /*
     * PRIORITY
     */

    if (form.priority === "future") {
      gponScore += 3;
    }

    if (form.priority === "performance") {
      gponScore += 1;
      ethernetScore += 1;
    }

    if (form.priority === "cost") {
      gponScore += rooms >= 100 ? 2 : 1;
      ethernetScore += rooms < 100 ? 2 : 1;
    }

    if (form.priority === "simplicity") {
      ethernetScore += 2;
    }

    /*
     * FINAL RECOMMENDATION
     */

    const recommended =
      gponScore >= ethernetScore + 2
        ? "GPON"
        : ethernetScore >= gponScore + 2
        ? "Ethernet"
        : "Hybrid";

    const totalScore = gponScore + ethernetScore;

    const gponPercentage = Math.round((gponScore / totalScore) * 100);

    const ethernetPercentage = 100 - gponPercentage;

    let explanation = "";

    if (recommended === "GPON") {
      explanation =
        "Based on your property characteristics, GPON appears to be the stronger architecture for your project. Fiber distribution can provide an efficient foundation for a larger, multi-floor or future-focused hotel network.";
    } else if (recommended === "Ethernet") {
      explanation =
        "Based on your property characteristics, Ethernet appears to be the more practical architecture. A smaller or existing property with shorter cable runs may benefit from a conventional Ethernet deployment.";
    } else {
      explanation =
        "Your project has characteristics that could support either architecture. A hybrid design may provide a practical balance between fiber distribution and Ethernet connectivity.";
    }

    return {
      recommended,
      explanation,
      gponScore,
      ethernetScore,
      gponPercentage,
      ethernetPercentage,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const calculated = calculateRecommendation();

    if (!calculated) return;

    setResult(calculated);

    setTimeout(() => {
      document.getElementById("comparison-results")?.scrollIntoView({
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
              Hotel Network Architecture Tool
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              GPON vs Ethernet for your hotel
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Compare GPON and Ethernet based on your hotel&apos;s size, floors,
              project stage, network distances and future requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300">
              <HeroFeature icon={Zap} text="Fiber architecture" />

              <HeroFeature icon={EthernetPort} text="Ethernet architecture" />

              <HeroFeature
                icon={Gauge}
                text="Project-specific recommendation"
              />

              <HeroFeature icon={ShieldCheck} text="Future scalability" />
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
              Architecture assessment
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Tell us about your project
            </h2>

            <p className="mt-2 text-slate-500">
              Answer a few questions to get a preliminary recommendation.
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
          {/* PROPERTY */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Hotel}
              title="What type of property are you building?"
              description="Select the option that best describes your hotel."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {propertyTypes.map((option) => (
                <ChoiceCard
                  key={option.value}
                  selected={form.propertyType === option.value}
                  onClick={() => updateField("propertyType", option.value)}
                  icon={Building2}
                  title={option.label}
                  description={option.description}
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Building2}
              title="Property size"
              description="The size of the property helps determine the network architecture."
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

          {/* PROJECT STAGE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Server}
              title="What stage is your project at?"
              description="Network architecture decisions can change depending on the construction stage."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {projectStages.map((option) => (
                <ChoiceCard
                  key={option.value}
                  selected={form.projectStage === option.value}
                  onClick={() => updateField("projectStage", option.value)}
                  icon={Network}
                  title={option.label}
                  description={option.description}
                />
              ))}
            </div>
          </div>

          {/* DISTANCE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Zap}
              title="How long are your network distribution distances?"
              description="Choose the option closest to your property."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {distanceOptions.map((option) => (
                <ChoiceCard
                  key={option.value}
                  selected={form.distance === option.value}
                  onClick={() => updateField("distance", option.value)}
                  icon={Zap}
                  title={option.label}
                  description={option.description}
                />
              ))}
            </div>
          </div>

          {/* SCALABILITY */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Sparkles}
              title="How important is future scalability?"
              description="Tell us how much you want to prepare for future expansion."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {scalabilityOptions.map((option) => (
                <ChoiceCard
                  key={option.value}
                  selected={form.scalability === option.value}
                  onClick={() => updateField("scalability", option.value)}
                  icon={ShieldCheck}
                  title={option.label}
                  description={option.description}
                />
              ))}
            </div>
          </div>

          {/* PRIORITY */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <SectionHeader
              icon={Gauge}
              title="What is your biggest priority?"
              description="Choose the factor that matters most for this project."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {priorityOptions.map((option) => (
                <ChoiceCard
                  key={option.value}
                  selected={form.priority === option.value}
                  onClick={() => updateField("priority", option.value)}
                  icon={Gauge}
                  title={option.label}
                  description={option.description}
                />
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="flex gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
            <CircleHelp size={20} className="mt-0.5 shrink-0 text-cyan-600" />

            <p className="text-sm leading-6 text-cyan-900">
              GPON and Ethernet can both support modern hotel networks. The
              right architecture depends on property size, cabling distances,
              construction stage, budget, operational requirements and future
              expansion.
            </p>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={
              !form.propertyType ||
              !form.rooms ||
              !form.floors ||
              !form.projectStage ||
              !form.distance ||
              !form.scalability ||
              !form.priority
            }
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
          >
            Compare GPON vs Ethernet
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
          id="comparison-results"
          className="border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            {/* HEADER */}
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                Your architecture assessment
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Recommended architecture:{" "}
                <span className="text-cyan-600">{result.recommended}</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                This recommendation is based on the property and project
                information you provided.
              </p>
            </div>

            {/* RECOMMENDATION */}
            <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    {result.recommended === "GPON" ? (
                      <Fiber size={40} />
                    ) : (
                      <EthernetPort size={40} />
                    )}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                    <CheckCircle2 size={17} />
                    {result.recommended} Recommended
                  </div>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
                    {result.explanation}
                  </p>
                </div>
              </div>
            </div>

            {/* SCORE */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <ArchitectureScore
                icon={Fiber}
                title="GPON"
                percentage={result.gponPercentage}
                recommended={result.recommended === "GPON"}
              />

              <ArchitectureScore
                icon={EthernetPort}
                title="Ethernet"
                percentage={result.ethernetPercentage}
                recommended={result.recommended === "Ethernet"}
              />
            </div>

            {/* COMPARISON */}
            <div className="mt-10">
              <div className="mb-5">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                  Technology comparison
                </p>

                <h3 className="mt-2 text-2xl font-bold">GPON vs Ethernet</h3>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {/* TABLE HEADER */}
                <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
                  <div className="p-4 text-sm font-semibold text-slate-500 sm:p-5">
                    Feature
                  </div>

                  <div className="border-l border-slate-200 p-4 text-center sm:p-5">
                    <div className="flex items-center justify-center gap-2 font-bold text-slate-900">
                      <Fiber size={17} className="text-cyan-600" />
                      GPON
                    </div>
                  </div>

                  <div className="border-l border-slate-200 p-4 text-center sm:p-5">
                    <div className="flex items-center justify-center gap-2 font-bold text-slate-900">
                      <EthernetPort size={17} className="text-cyan-600" />
                      Ethernet
                    </div>
                  </div>
                </div>

                {comparison.map((item) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-3 border-b border-slate-100 last:border-b-0"
                  >
                    <div className="p-4 text-sm font-medium text-slate-700 sm:p-5">
                      {item.feature}
                    </div>

                    <div className="border-l border-slate-100 p-4 text-center text-sm text-slate-600 sm:p-5">
                      {item.gpon}
                    </div>

                    <div className="border-l border-slate-100 p-4 text-center text-sm text-slate-600 sm:p-5">
                      {item.ethernet}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KEY TAKEAWAYS */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Takeaway
                type="positive"
                title="When GPON makes sense"
                items={[
                  "Large or multi-floor hotel properties",
                  "New-build or major renovation projects",
                  "Long network distribution distances",
                  "Projects focused on future scalability",
                  "Fiber-first infrastructure strategy",
                ]}
              />

              <Takeaway
                type="neutral"
                title="When Ethernet makes sense"
                items={[
                  "Smaller properties",
                  "Short network distribution distances",
                  "Existing Ethernet infrastructure",
                  "Straightforward network upgrades",
                  "Projects prioritizing deployment simplicity",
                ]}
              />
            </div>

            {/* CTA */}
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                  Building or upgrading a hotel?
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Let Hotevance design the right network architecture
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Our team can assess your property, infrastructure and
                  technology requirements and recommend an architecture designed
                  around your hotel's actual needs.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
                  >
                    Request a Technology Assessment
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
                    Compare Again
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
                This calculator provides a preliminary architecture
                recommendation based on the information provided. It is not a
                substitute for detailed network design, engineering
                calculations, equipment selection or a professional site
                assessment. Actual requirements may vary depending on building
                construction, topology, equipment and operational requirements.
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

function ArchitectureScore({ icon: Icon, title, percentage, recommended }) {
  return (
    <div
      className={`rounded-3xl border p-6 ${
        recommended
          ? "border-cyan-500 bg-cyan-50/50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white p-3 text-cyan-600 shadow-sm">
            <Icon size={21} />
          </div>

          <h3 className="font-bold">{title}</h3>
        </div>

        {recommended && (
          <span className="rounded-full bg-cyan-500 px-3 py-1.5 text-xs font-bold text-white">
            Recommended
          </span>
        )}
      </div>

      <div className="mt-6">
        <div className="flex items-end justify-between">
          <span className="text-sm text-slate-500">Suitability</span>

          <span className="text-2xl font-bold">{percentage}%</span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-cyan-500 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function Takeaway({ type, title, items }) {
  const positive = type === "positive";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div
          className={`rounded-xl p-3 ${
            positive
              ? "bg-cyan-50 text-cyan-600"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {positive ? <Check size={21} /> : <EthernetPort size={21} />}
        </div>

        <h3 className="font-bold">{title}</h3>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2
              size={17}
              className="mt-0.5 shrink-0 text-emerald-500"
            />

            <span className="text-sm leading-6 text-slate-600">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
