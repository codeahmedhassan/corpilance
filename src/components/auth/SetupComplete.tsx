"use client";

import Link from "next/link";
import { CompanyData } from "./StepCompany";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

type Props = {
    company: CompanyData;
    teamSize: string;
};

export default function SetupComplete({ company, teamSize }: Props) {
    const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || "http://localhost:3002";

    const summary = [
        { label: "Company", value: company.name || "—" },
        { label: "Industry", value: company.industry || "—" },
        { label: "Timezone", value: company.timezone || "—" },
        { label: "Team size", value: teamSize || "—" },
    ];

    return (
        <div className="animate-auth-rise text-center">
            {/* Verification Underway Icon */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                        <svg
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                    </div>
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full ring-4 ring-amber-100/60 animate-pulse"
                    />
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Workspace Submitted for Verification
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
                Your workspace configuration has been submitted to the CorpiLance Super Admin compliance team.
                To maintain platform security, all organizations are reviewed before dashboard access is activated.
            </p>

            {/* Summary card */}
            <div className="mt-7 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 text-left">
                <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Workspace Application
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                        Pending Verification
                    </span>
                </div>
                <dl className="space-y-2.5">
                    {summary.map((item) => (
                        <div key={item.label} className="flex items-start justify-between gap-3 text-sm">
                            <dt className="text-slate-500 shrink-0">{item.label}</dt>
                            <dd className="font-semibold text-slate-900 text-right break-all min-w-0">
                                {item.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
                <Link
                    href={`${ADMIN_URL}/`}
                    className="
            relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full overflow-hidden
            text-white text-sm font-semibold
            transition-transform active:scale-[0.98]
          "
                >
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full"
                        style={{
                            backdropFilter:
                                "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                            WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                        }}
                    />
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-slate-950/90"
                    />
                    <span className="relative flex items-center gap-2">
                        View Verification Status
                        <ArrowRight />
                    </span>
                </Link>
                <Link
                    href="/features"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                    Explore Features
                </Link>
            </div>

            <p className="mt-5 text-[11px] text-slate-400">
                You will receive an email confirmation once your workspace has been approved by our Super Admins.
            </p>
        </div>
    );
}
