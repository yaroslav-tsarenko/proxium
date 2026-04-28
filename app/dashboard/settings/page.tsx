"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { User, Lock, MapPin, Loader2, Check } from "lucide-react";
import { ALL_COUNTRIES, EXCLUDED_COUNTRIES } from "@/lib/auth/constants";

const allowedCountries = ALL_COUNTRIES.filter(
  (c) => !(EXCLUDED_COUNTRIES as readonly string[]).includes(c),
);

const inputClass =
  "w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-50 text-sm placeholder:text-zinc-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors";

export default function SettingsPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const [profile, setProfile] = useState({
    name: "", surname: "", email: "", phone: "",
    street: "", city: "", country: "", postCode: "",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "", newPassword: "", confirmPassword: "",
  });

  useEffect(() => {
    fetch("/api/dashboard/settings")
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          setProfile({
            name: data.user.name || "",
            surname: data.user.surname || "",
            email: data.user.email || "",
            phone: data.user.phone || "",
            street: data.user.address?.street || "",
            city: data.user.address?.city || "",
            country: data.user.address?.country || "",
            postCode: data.user.address?.postCode || "",
          });
        }
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!formRef.current || loading) return;
    const sections = formRef.current.querySelectorAll("[data-section]");
    gsap.fromTo(
      sections,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
    );
  }, [loading]);

  const handleSave = async () => {
    setSaving(true);
    setError("");

    const body: Record<string, string> = { ...profile };
    if (passwords.newPassword) {
      if (passwords.newPassword !== passwords.confirmPassword) {
        setError("Passwords do not match.");
        setSaving(false);
        return;
      }
      body.currentPassword = passwords.currentPassword;
      body.newPassword = passwords.newPassword;
    }

    try {
      const res = await fetch("/api/dashboard/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save.");
        setSaving(false);
        return;
      }
      setSaved(true);
      setSaving(false);
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setTimeout(() => setSaved(false), 2000);
    } catch {
      setError("Network error.");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 bg-zinc-900 border border-zinc-800 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl" ref={formRef}>
      <div>
        <h2 className="text-zinc-50 text-2xl font-bold">Account Settings</h2>
        <p className="text-zinc-400 text-sm mt-1">Update your profile and security settings.</p>
      </div>

      <div data-section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-zinc-50 font-semibold mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-green-400" /> Personal Info
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5">Name</label>
            <input value={profile.name} onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5">Surname</label>
            <input value={profile.surname} onChange={(e) => setProfile((p) => ({ ...p, surname: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5">Email</label>
            <input value={profile.email} disabled className={inputClass + " opacity-50 cursor-not-allowed"} />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5">Phone</label>
            <input value={profile.phone} onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))} className={inputClass} />
          </div>
        </div>
      </div>

      <div data-section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-zinc-50 font-semibold mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-400" /> Address
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-zinc-400 text-xs mb-1.5">Street</label>
            <input value={profile.street} onChange={(e) => setProfile((p) => ({ ...p, street: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5">City</label>
            <input value={profile.city} onChange={(e) => setProfile((p) => ({ ...p, city: e.target.value }))} className={inputClass} />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5">Post Code</label>
            <input value={profile.postCode} onChange={(e) => setProfile((p) => ({ ...p, postCode: e.target.value }))} className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-zinc-400 text-xs mb-1.5">Country</label>
            <select value={profile.country} onChange={(e) => setProfile((p) => ({ ...p, country: e.target.value }))} className={inputClass + " appearance-none"}>
              <option value="">Select country</option>
              {allowedCountries.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div data-section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h3 className="text-zinc-50 font-semibold mb-4 flex items-center gap-2">
          <Lock className="w-4 h-4 text-green-400" /> Change Password
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5">Current Password</label>
            <input type="password" value={passwords.currentPassword} onChange={(e) => setPasswords((p) => ({ ...p, currentPassword: e.target.value }))} className={inputClass} placeholder="Enter current password" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-400 text-xs mb-1.5">New Password</label>
              <input type="password" value={passwords.newPassword} onChange={(e) => setPasswords((p) => ({ ...p, newPassword: e.target.value }))} className={inputClass} placeholder="Min. 8 characters" />
            </div>
            <div>
              <label className="block text-zinc-400 text-xs mb-1.5">Confirm Password</label>
              <input type="password" value={passwords.confirmPassword} onChange={(e) => setPasswords((p) => ({ ...p, confirmPassword: e.target.value }))} className={inputClass} placeholder="Repeat new password" />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <div data-section className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-3 rounded-xl bg-green-500 text-zinc-950 font-semibold text-sm hover:bg-green-400 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] disabled:opacity-50 flex items-center gap-2"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <Check className="w-4 h-4" /> : null}
          {saved ? "Saved!" : saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
