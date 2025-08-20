import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";

const title = "Create Admin User";

function AdminUserCreation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    const payload = {
      email: data.email || null,
      first_name: data.firstName,
      last_name: data.lastName,
      tlc_city: data.tlcCity,
      contact_whatsapp: data.whatsapp || null,
      contact: data.contact,
      organization_name: data.organizationName || null,
      organization_type: data.organizationType || null,
      your_designation: data.yourDesignation || null,
      organization_address: data.organizationAddress || null,
      pincode: data.pincode || null,
      city: data.city || null,
      states: data.state || null,
      country: data.country || null,
      startup_company: data.startup || null,
      gov_funded: data.govFunding || null,
      if_yes_gov_mention: data.ifYesGovMention || null,
      field_innovation: data.innovationField || null,
      specify_field: data.innovationOther || null,
      patent_filed: data.patent || null,
      if_yes_how_many_patent: data.patentCount || null,
      innovative_ideas: data.innovativeIdeas || null,
      if_yes_how_many_ideas: data.ideasCount || null,
      idea_generation: data.ideaSource || null,
      schedule_discussion: null,
      book_timeslot: data.timeSlot || null,
      responses: null,
    };

    try {
      const res = await fetch("http://localhost:5000/api/admin/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to create admin user");

      alert("✅ Admin user created successfully!");
    } catch (err) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <PageHeader title={title} curPage={"admin-create-user"} />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 pt-32">
        <div className="relative w-full max-w-4xl bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-10 border border-white/40">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            🚀 Admin User Registration
          </h1>

          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                  step === s ? "bg-pink-600" : "bg-gray-400"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>First Name</label>
                  <input {...register("firstName", { required: "Required" })} className="w-full p-3 border rounded-lg" />
                  {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label>Last Name</label>
                  <input {...register("lastName", { required: "Required" })} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>TLC City</label>
                  <input {...register("tlcCity", { required: "Required" })} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>WhatsApp</label>
                  <input {...register("whatsapp")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>Contact</label>
                  <input {...register("contact", { required: "Required" })} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Alt Email</label>
                  <input {...register("email")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Pincode</label>
                  <input {...register("pincode")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>City</label>
                  <input {...register("city")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>State</label>
                  <input {...register("state")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Country</label>
                  <input {...register("country")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Startup?</label>
                  <select {...register("startup")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label>Govt. Funding?</label>
                  <select {...register("govFunding")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>Innovation Field</label>
                  <input {...register("innovationField")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>If Other</label>
                  <input {...register("innovationOther")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Patents Filed?</label>
                  <select {...register("patent")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label>Patent Count</label>
                  <input type="number" {...register("patentCount")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>Innovative Ideas?</label>
                  <select {...register("innovativeIdeas")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label>Ideas Count</label>
                  <input type="number" {...register("ideasCount")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Source</label>
                  <input {...register("ideaSource")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Book Time Slot</label>
                  <input type="datetime-local" {...register("timeSlot")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="px-6 py-3 bg-gray-400 text-white rounded-lg">
                  ⬅ Prev
                </button>
              )}
              {step < 5 ? (
                <button type="button" onClick={nextStep} className="ml-auto px-6 py-3 bg-pink-500 text-white rounded-lg">
                  Next ➡
                </button>
              ) : (
                <button type="submit" className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg">
                  ✅ Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminUserCreation;
