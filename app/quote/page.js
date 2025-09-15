"use client";

import { useState } from "react";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus({ loading: false, success: true, error: "" });
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Алдаа гарлаа. Дахин оролдоно уу." });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200">
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-10 md:pt-14 pb-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Үнийн санал авах</h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Төслийнхаа талаар товч мэдээллээ үлдээгээрэй. Бид хурдан холбогдоно.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl bg-white dark:bg-gray-800 p-6 md:p-8 shadow-sm">
          <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Нэр</label>
              <input required value={form.name} onChange={update("name")} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Компани (сонголт)</label>
              <input value={form.company} onChange={update("company")} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Имэйл</label>
              <input type="email" required value={form.email} onChange={update("email")} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Утас</label>
              <input type="tel" required value={form.phone} onChange={update("phone")} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Төслийн товч танилцуулга</label>
              <textarea required rows={5} value={form.message} onChange={update("message")} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            {status.error && (
              <div className="md:col-span-2 text-sm text-red-600">{status.error}</div>
            )}
            {status.success && (
              <div className="md:col-span-2 text-sm text-green-600">Амжилттай илгээлээ. Бид удахгүй холбогдоно.</div>
            )}

            <div className="md:col-span-2 flex justify-end">
              <button type="submit" disabled={status.loading} className={`inline-flex items-center justify-center rounded-md px-5 py-2 font-semibold text-white transition ${status.loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
                {status.loading ? "Илгээж байна..." : "Илгээх"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

