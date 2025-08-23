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
    trigger,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const [step, setStep] = useState(1);

  const nextStep = async () => {
  const isValid = await triggerStepValidation();
  if (isValid) setStep((prev) => prev + 1);
};

const triggerStepValidation = async () => {
  let fields = [];
  if (step === 1) fields = ["firstName", "lastName", "tlcCity"];
  if (step === 2) fields = ["contact"];
  if (step === 4) fields = ["fieldInnovation"];
  const valid = await trigger(fields); // trigger comes from useForm()
  return valid;
};

  
  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
  try {
    const res = await fetch("http://localhost:5000/api/admin/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Safely parse JSON, even if the server returns HTML
    let result;
    try {
      result = await res.json();
    } catch {
      result = { error: "Server returned non-JSON response" };
    }

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

          {/* Steps Indicator */}
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

          <form
  onSubmit={(e) => e.preventDefault()} 
  className="space-y-6"
  onKeyDown={(e) => {
    if (e.key === "Enter" && step < 5) e.preventDefault();
  }}
>

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

            {/* STEP 2 */}
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

            {/* STEP 3 */}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>State</label>
                  <input {...register("states")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Country</label>
                  <input {...register("country")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Startup?</label>
                  <select {...register("startupCompany")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label>Govt. Funding?</label>
                  <select {...register("govFunded")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label>Innovation Field</label>
                  <input {...register("fieldInnovation")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>If Other</label>
                  <input {...register("specifyField")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Patents Filed?</label>
                  <select {...register("patentFiled")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label>Patent Count</label>
                  <input type="number" {...register("ifYesHowManyPatent")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {/* STEP 5 */}
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
                  <input type="number" {...register("ifYesHowManyIdeas")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Source</label>
                  <input {...register("ideaGeneration")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label>Book Time Slot</label>
                  <input type="datetime-local" {...register("bookTimeSlot")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
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
                <button
  type="button"
  onClick={handleSubmit(onSubmit)}
  className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg"
>
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
