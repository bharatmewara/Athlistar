import React, { useState } from "react";
import "./AthleteSponsorship.css";

const PRIMARY_SPORTS = ["Basketball", "Cricket", "Football", "Tennis", "CrossFit", "Running", "Other"];
const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced", "Semi-Pro", "Professional"];
const FREQUENCIES = ["Daily", "3–5 times a week", "Weekly", "Occasionally"];
const HEARD_OPTIONS = ["Instagram", "Friend", "YouTube", "Coach", "Google", "Other"];
const SUPPORT_OPTIONS = [
  "Equipment or gear",
  "Monetary support",
  "Training or coaching",
  "Travel/tournament fees",
  "Branding/promotion support",
];

export default function AthleteSponsorship() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "+91",
    city: "",
    country: "India",
    age: "",
    primarySport: "",
    skillLevel: "",
    frequency: "",
    achievements: "",
    whySponsor: "",
    videoFile: null,
    videoURL: "",
    instagram: "",
    youtube: "",
    otherSocial: "",
    currentSponsorships: "",
    supportNeeded: [],
    heardAbout: "",
    agreeAccurate: false,
    agreeNoGuarantee: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const CHAR_LIMIT = 300;

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const toggleSupport = (opt) => {
    setForm(prev => {
      const arr = Array.isArray(prev.supportNeeded) ? [...prev.supportNeeded] : [];
      if (arr.includes(opt)) return { ...prev, supportNeeded: arr.filter(x => x !== opt) };
      arr.push(opt);
      return { ...prev, supportNeeded: arr };
    });
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    update("videoFile", f || null);
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required.";
    if (!form.phone.trim()) e.phone = "Phone is required.";
    if (!form.city.trim()) e.city = "City is required.";
    if (!form.age || Number(form.age) <= 0) e.age = "Valid age required.";
    if (!form.primarySport) e.primarySport = "Primary sport required.";
    if (!form.skillLevel) e.skillLevel = "Skill level required.";
    if (!form.frequency) e.frequency = "Playing frequency required.";
    if (!form.agreeAccurate) e.agreeAccurate = "You must certify accuracy.";
    if (!form.agreeNoGuarantee) e.agreeNoGuarantee = "You must accept no guarantee.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (submitting) return;
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);

    // Replace this with real API / Firebase logic
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        phone: "+91",
        city: "",
        country: "India",
        age: "",
        primarySport: "",
        skillLevel: "",
        frequency: "",
        achievements: "",
        whySponsor: "",
        videoFile: null,
        videoURL: "",
        instagram: "",
        youtube: "",
        otherSocial: "",
        currentSponsorships: "",
        supportNeeded: [],
        heardAbout: "",
        agreeAccurate: false,
        agreeNoGuarantee: false,
      });
      setErrors({});
    }, 900);
  };

  if (success) {
    return (
      <div className="ath-sponsor-page">
        <div className="ath-banner">
          <div className="banner-title">APPLY FOR ATHLETE <span className="ath-banner-highlight">SPONSORSHIP</span></div>
          <div className="banner-tagline">Fill In The Details. Stand Out. Get Scouted.</div>
        </div>
        <div className="ath-container">
          <div className="success-box">
            <h2>Thanks, athlete! 🎉</h2>
            <p>Your application has been received. Our team will review it and get in touch shortly.</p>
            <button className="ath-btn" onClick={() => setSuccess(false)}>Submit another</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ath-sponsor-page">
      <div className="ath-banner">
        <div className="banner-title">APPLY FOR ATHLETE <span className="ath-banner-highlight">SPONSORSHIP</span></div>
        <div className="banner-tagline">Fill In The Details. Stand Out. Get Scouted.</div>
      </div>

      <div className="ath-container">
        <div className="ath-layout">
          <form className="ath-form-card" onSubmit={handleSubmit} noValidate>
            <div className="ath-form-inner">
              <div className="field">
                <label>Full Name <span className="req">*</span></label>
                <input value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Full Name" />
                {errors.fullName && <div className="err">{errors.fullName}</div>}
              </div>

              <div className="field">
                <label>Email Address <span className="req">*</span></label>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
                {errors.email && <div className="err">{errors.email}</div>}
              </div>

              <div className="field">
                <label>Phone Number (with country code) <span className="req">*</span></label>
                <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" />
                {errors.phone && <div className="err">{errors.phone}</div>}
              </div>

              <div className="row-2">
                <div className="field">
                  <label>City <span className="req">*</span></label>
                  <input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="City" />
                  {errors.city && <div className="err">{errors.city}</div>}
                </div>
                <div className="field">
                  <label>Country <span className="req">*</span></label>
                  <select value={form.country} onChange={(e) => update("country", e.target.value)}>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="row-2">
                <div className="field">
                  <label>Age <span className="req">*</span></label>
                  <input type="number" min="8" value={form.age} onChange={(e) => update("age", e.target.value)} placeholder="Age" />
                  {errors.age && <div className="err">{errors.age}</div>}
                </div>
                <div className="field">
                  <label>Your Primary Sport <span className="req">*</span></label>
                  <select value={form.primarySport} onChange={(e) => update("primarySport", e.target.value)}>
                    <option value="">Select sport</option>
                    {PRIMARY_SPORTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.primarySport && <div className="err">{errors.primarySport}</div>}
                </div>
              </div>

              <div className="row-2">
                <div className="field">
                  <label>Skill Level <span className="req">*</span></label>
                  <select value={form.skillLevel} onChange={(e) => update("skillLevel", e.target.value)}>
                    <option value="">Select</option>
                    {SKILL_LEVELS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.skillLevel && <div className="err">{errors.skillLevel}</div>}
                </div>
                <div className="field">
                  <label>Playing Frequency <span className="req">*</span></label>
                  <select value={form.frequency} onChange={(e) => update("frequency", e.target.value)}>
                    <option value="">Select</option>
                    {FREQUENCIES.map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                  {errors.frequency && <div className="err">{errors.frequency}</div>}
                </div>
              </div>

              <div className="field">
                <label>Achievements & Highlights</label>
                <textarea maxLength={CHAR_LIMIT} value={form.achievements} onChange={(e) => update("achievements", e.target.value)} placeholder="Medals, tournaments, teams... (max 300 chars)" />
                <div className="charcount">{form.achievements.length}/{CHAR_LIMIT}</div>
              </div>

              <div className="field">
                <label>Why Should We Sponsor You?</label>
                <textarea maxLength={CHAR_LIMIT} value={form.whySponsor} onChange={(e) => update("whySponsor", e.target.value)} placeholder="Tell us why you stand out..." />
                <div className="charcount">{form.whySponsor.length}/{CHAR_LIMIT}</div>
              </div>

              <div className="field">
                <label>Upload Highlight Video or Performance Reel (optional)</label>
                <input type="file" accept="video/*" onChange={handleFile} />
                {form.videoFile && <div className="file-preview">{form.videoFile.name}</div>}
              </div>

              <div className="field">
                <label>YouTube / Video Link (optional)</label>
                <input type="url" value={form.videoURL} onChange={(e) => update("videoURL", e.target.value)} placeholder="https://youtube.com/..." />
              </div>

              <div className="field">
                <label>Social Media Handles (optional)</label>
                <input placeholder="Instagram (eg. @you)" value={form.instagram} onChange={(e)=> update("instagram", e.target.value)} />
                <input placeholder="YouTube" value={form.youtube} onChange={(e)=> update("youtube", e.target.value)} />
                <input placeholder="TikTok / other" value={form.otherSocial} onChange={(e)=> update("otherSocial", e.target.value)} />
              </div>

              <div className="field">
                <label>Current Sponsorships (if any)</label>
                <input placeholder="Brand names or 'None'" value={form.currentSponsorships} onChange={(e)=> update("currentSponsorships", e.target.value)} />
              </div>

              <fieldset className="field support-field">
                <legend>What Kind of Support Do You Need? (select all)</legend>
                <div className="checkbox-grid">
                  {SUPPORT_OPTIONS.map(opt => (
                    <label key={opt} className="checkbox-row">
                      <input type="checkbox" checked={form.supportNeeded.includes(opt)} onChange={() => toggleSupport(opt)} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field">
                <label>How Did You Hear About Athlistar?</label>
                <select value={form.heardAbout} onChange={(e) => update("heardAbout", e.target.value)}>
                  <option value="">Select</option>
                  {HEARD_OPTIONS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>

              <div className="agreements">
                <label className="checkbox-row">
                  <input type="checkbox" checked={form.agreeAccurate} onChange={(e) => update("agreeAccurate", e.target.checked)} />
                  <span>I certify all the information above is accurate to the best of my knowledge.</span>
                </label>
                {errors.agreeAccurate && <div className="err">{errors.agreeAccurate}</div>}

                <label className="checkbox-row">
                  <input type="checkbox" checked={form.agreeNoGuarantee} onChange={(e) => update("agreeNoGuarantee", e.target.checked)} />
                  <span>I understand this application does not guarantee sponsorship.</span>
                </label>
                {errors.agreeNoGuarantee && <div className="err">{errors.agreeNoGuarantee}</div>}
              </div>

              <div className="form-actions">
                <button className="ath-btn" type="submit" disabled={submitting}>{submitting ? "Submitting..." : "SUBMIT APPLICATION"}</button>
              </div>
            </div>
          </form>

          <aside className="ath-side-card">
            <div className="side-inner">
              <div className="side-badge">EXCLUSIVE <span className="side-badge-highlight">COMMUNITY</span> ACCESS</div>
              <h3>The locker room that legends build</h3>
              <p className="muted">A private network of elite athletes & invite-only access.</p>
              <button className="side-request">REQUEST INVITE ⇗</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
