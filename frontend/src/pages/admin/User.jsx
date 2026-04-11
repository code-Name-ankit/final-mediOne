import React from "react";

export default function User() {
  return (
    <>
      <section class="mt-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 class="text-[3.5rem] font-bold tracking-tight leading-none text-on-surface">
              User Management
            </h1>
            <p class="mt-2 text-body-lg text-on-surface-variant max-w-2xl">
              Control clinical access, manage provider credentials, and audit
              user activity across the MediHelp network.
            </p>
          </div>
          <div class="flex gap-3">
            <button class="px-5 py-2.5 bg-surface-container-high text-on-primary-fixed-variant rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
              <span
                class="material-symbols-outlined text-sm"
                data-icon="download"
              >
                download
              </span>
              Export to CSV
            </button>
            <button class="px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/20 text-on-surface rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
              <span
                class="material-symbols-outlined text-sm"
                data-icon="more_vert"
              >
                more_vert
              </span>
              Bulk Actions
            </button>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4 bg-surface-container-low/50 p-4 rounded-2xl mt-9">
          <div class="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl shadow-sm">
            <span class="text-label-md text-on-surface-variant">Role:</span>
            <select class="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 cursor-pointer">
              <option>All Roles</option>
              <option>User</option>
              <option>Pharmacy</option>
              <option>Lab</option>
              <option>Doctor</option>
            </select>
          </div>
          <div class="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl shadow-sm">
            <span class="text-label-md text-on-surface-variant">Status:</span>
            <select class="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 cursor-pointer">
              <option>Any Status</option>
              <option>Active</option>
              <option>Blocked</option>
              <option>Pending</option>
            </select>
          </div>
          <div class="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-xl shadow-sm">
            <span class="text-label-md text-on-surface-variant">Created:</span>
            <select class="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>All Time</option>
            </select>
          </div>
          <button class="text-primary text-sm font-semibold px-2 hover:underline">
            Clear Filters
          </button>
          <div class="ml-auto flex items-center gap-6">
            <div class="text-right">
              <p class="text-label-md text-on-surface-variant uppercase tracking-wider">
                Total Users
              </p>
              <p class="text-xl font-bold">14,208</p>
            </div>
            <div class="text-right">
              <p class="text-label-md text-on-surface-variant uppercase tracking-wider">
                Active Now
              </p>
              <p class="text-xl font-bold text-secondary">3,491</p>
            </div>
          </div>
        </div>

        <div class="overflow-hidden bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/10 mt-9">
          <table class="w-full border-collapse text-left">
            <thead>
              <tr class="bg-surface-container-low/50">
                <th class="px-6 py-4 text-label-md text-on-surface-variant font-semibold tracking-wider">
                  <div class="flex items-center gap-2">
                    <input
                      class="rounded-md border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    USER NAME
                  </div>
                </th>
                <th class="px-6 py-4 text-label-md text-on-surface-variant font-semibold tracking-wider">
                  CONTACT EMAIL
                </th>
                <th class="px-6 py-4 text-label-md text-on-surface-variant font-semibold tracking-wider">
                  ASSIGNED ROLE
                </th>
                <th class="px-6 py-4 text-label-md text-on-surface-variant font-semibold tracking-wider">
                  SYSTEM STATUS
                </th>
                <th class="px-6 py-4 text-label-md text-on-surface-variant font-semibold tracking-wider text-right">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody class="divide-y-0">
              <tr class="hover:bg-surface-container-low/30 transition-colors group">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-4">
                    <input
                      class="rounded-md border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <img
                      class="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                      data-alt="Close-up portrait of a male doctor in medical attire with a warm, professional expression"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_b9tuJJL6UQDvDUxFShoWWbHougyHjr0tFz3E38fX8e0bnTUpya-P0mXW_eVuOvM4EpcpEB8djo4w7bSCqXNYFuwbI5XKiIXKTpbjNchXicEipBvD8RZx1Y_85XB3X2b62SM8X3JtwyXIjSu2rOAHU_bK1vfCGz8DGAwQ8ubakp0kPbYC4bnmd8GGVXhF2bWpQZbyvUvshVAe36X74TztQ3jXmba5930zuby5yQbE3mJTJXqpVH-jk4ERLCFUUhQskgA9lUL68co"
                    />
                    <div>
                      <div class="font-semibold text-on-surface">
                        Dr. Julian Thorne
                      </div>
                      <div class="text-xs text-on-surface-variant">
                        ID: MED-49201
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-on-surface-variant">
                  julian.thorne@medihelp.com
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                    Doctor
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button
                      class="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors"
                      title="View Details"
                    >
                      <span
                        class="material-symbols-outlined"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button
                      class="p-2 hover:bg-error-container rounded-lg text-error transition-colors"
                      title="Block User"
                    >
                      <span class="material-symbols-outlined" data-icon="block">
                        block
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-surface-container-low/30 transition-colors group bg-surface-container-low/10">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-4">
                    <input
                      class="rounded-md border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <img
                      class="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                      data-alt="Professional profile photo of a woman with glasses, smiling softly, in a bright office environment"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMzjmTkDCh30PeS5SLYKO8USZ-hx9rwsbbSfgRADtuLfS3NID9pKfZj1yHhNd3iehuQuWikuhcVRXSg7cQbo0M9_F1lMDCobDEaCpzBw6AiMlG5p_0pDo2Px7e0CeLDWpuB780nSo5XcUQDvDUxFShoWWbHougyHjr0tFz3E38fX8e0bnTUpya-P0mXW-jZkg17LPpEjbDNr0W-bcf_1l1qJ8vtWLfUz9XoSHTs1sdvtwoBexxirNKai4WApaOaUXwJAOsmNpYvCc"
                    />
                    <div>
                      <div class="font-semibold text-on-surface">
                        Elena Rodriguez
                      </div>
                      <div class="text-xs text-on-surface-variant">
                        ID: PHM-11029
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-on-surface-variant">
                  e.rodriguez@citypharma.net
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                    Pharmacy
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button class="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors">
                      <span
                        class="material-symbols-outlined"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button class="p-2 hover:bg-error-container rounded-lg text-error transition-colors">
                      <span class="material-symbols-outlined" data-icon="block">
                        block
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-surface-container-low/30 transition-colors group">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-4">
                    <input
                      class="rounded-md border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <div class="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold shadow-sm group-hover:scale-105 transition-transform">
                      MK
                    </div>
                    <div>
                      <div class="font-semibold text-on-surface">
                        Markus Kael
                      </div>
                      <div class="text-xs text-on-surface-variant">
                        ID: USR-88273
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-on-surface-variant">
                  kael.markus@gmail.com
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-700 border border-slate-100">
                    User
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-semibold bg-error-container text-on-error-container">
                    Blocked
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button class="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors">
                      <span
                        class="material-symbols-outlined"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button
                      class="p-2 hover:bg-secondary-container rounded-lg text-secondary transition-colors"
                      title="Unblock User"
                    >
                      <span
                        class="material-symbols-outlined"
                        data-icon="check_circle"
                      >
                        check_circle
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-surface-container-low/30 transition-colors group bg-surface-container-low/10">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-4">
                    <input
                      class="rounded-md border-outline-variant text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <img
                      class="w-10 h-10 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                      data-alt="Professional studio portrait of a lab technician in white coat, clean minimalist aesthetic"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCczMj05gDddatU44Huyu3668gYMKf9eSKXxKmslwtxCe2RjRP-fENQJ68ZxUpFh7GSGcZLRkrvQ7PRmOA-uGqcWx8txfNoDLhU9fKPUoms3y5w9gxwC-9bO9dTVo8KVEgpSWybld-GoNJZ8acWi1vZPo1m9W3uVD9Msj1BNfXOESen-z6MXjq_7ENN8GbefALKKaJ6dJ2JUC6K5jsLfOa6HikQ3D8dZJZwS9coFzrS5LfA_j24pblWmZIxk7wyrnQMr8OshI0sPqc"
                    />
                    <div>
                      <div class="font-semibold text-on-surface">
                        Sarah Jenkins
                      </div>
                      <div class="text-xs text-on-surface-variant">
                        ID: LAB-33012
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-on-surface-variant">
                  s.jenkins@biolab.co
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Lab
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <button class="p-2 hover:bg-primary-fixed rounded-lg text-primary transition-colors">
                      <span
                        class="material-symbols-outlined"
                        data-icon="visibility"
                      >
                        visibility
                      </span>
                    </button>
                    <button class="p-2 hover:bg-error-container rounded-lg text-error transition-colors">
                      <span class="material-symbols-outlined" data-icon="block">
                        block
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="px-6 py-4 bg-surface-container-low/50 flex items-center justify-between">
            <span class="text-xs text-on-surface-variant font-medium">
              Showing 1 to 4 of 14,208 entries
            </span>
            <div class="flex gap-1">
              <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface-variant shadow-sm opacity-50 cursor-not-allowed">
                <span class="material-symbols-outlined text-sm">
                  chevron_left
                </span>
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white shadow-md font-bold text-xs">
                1
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-primary-fixed transition-colors text-xs">
                2
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-primary-fixed transition-colors text-xs">
                3
              </button>
              <span class="w-8 h-8 flex items-center justify-center text-xs">
                ...
              </span>
              <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-primary-fixed transition-colors text-xs">
                402
              </button>
              <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-container-lowest text-on-surface-variant shadow-sm hover:bg-primary-fixed transition-colors">
                <span class="material-symbols-outlined text-sm">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
          <div class="bg-gradient-to-br from-primary to-primary-container p-6 rounded-[2rem] text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div>
              <p class="text-sm font-medium opacity-80">
                Pending Verifications
              </p>
              <p class="text-4xl font-bold mt-1">124</p>
            </div>
            <div class="mt-8 flex items-center justify-between">
              <span class="text-xs py-1 px-3 bg-white/20 rounded-full backdrop-blur-md">
                +12% from last week
              </span>
              <span class="material-symbols-outlined" data-icon="verified_user">
                verified_user
              </span>
            </div>
          </div>
          <div class="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <p class="text-sm font-medium text-on-surface-variant">
                Security Alerts
              </p>
              <p class="text-4xl font-bold text-on-surface mt-1">3</p>
            </div>
            <div class="mt-8 flex items-center justify-between">
              <span class="text-xs py-1 px-3 bg-error-container text-on-error-container rounded-full font-bold">
                Action Required
              </span>
              <span
                class="material-symbols-outlined text-error"
                data-icon="security"
              >
                security
              </span>
            </div>
          </div>
          <div class="bg-secondary-container p-6 rounded-[2rem] text-on-secondary-container flex flex-col justify-between relative overflow-hidden shadow-lg">
            <div class="absolute bottom-0 right-0 w-24 h-24 bg-white/20 rounded-full -mb-12 -mr-12 blur-xl"></div>
            <div>
              <p class="text-sm font-medium opacity-80">Platform Uptime</p>
              <p class="text-4xl font-bold mt-1">99.98%</p>
            </div>
            <div class="mt-8 flex items-center justify-between">
              <span class="text-xs py-1 px-3 bg-white/30 rounded-full font-semibold">
                Healthy System
              </span>
              <span class="material-symbols-outlined" data-icon="bolt">
                bolt
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
