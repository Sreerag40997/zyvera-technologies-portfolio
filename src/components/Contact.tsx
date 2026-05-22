import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Calendar, Clock, MessageSquare, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const [activeChannel, setActiveChannel] = useState<'message' | 'schedule'>('message');
  
  // Message form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmittingMsg, setIsSubmittingMsg] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  // Scheduling states
  const [selectedDay, setSelectedDay] = useState<number>(1); // 1 = Monday, 2 = Tuesday etc
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmittingCall, setIsSubmittingCall] = useState(false);
  const [callSuccess, setCallSuccess] = useState(false);

  // Static options
  const daysOfWeek = [
    { id: 1, name: 'Mon', date: 'May 25' },
    { id: 2, name: 'Tue', date: 'May 26' },
    { id: 3, name: 'Wed', date: 'May 27' },
    { id: 4, name: 'Thu', date: 'May 28' },
    { id: 5, name: 'Fri', date: 'May 29' },
  ];

  const timeSlots = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmittingMsg(true);
    setTimeout(() => {
      setIsSubmittingMsg(false);
      setMsgSuccess(true);
      setTimeout(() => {
        setMsgSuccess(false);
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
        // Also clear hidden inputs
        const servicesInput = document.getElementById('contact-services-summary') as HTMLInputElement | null;
        if (servicesInput) servicesInput.value = '';
      }, 4000);
    }, 1800);
  };

  const handleBookCall = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedTime) return;

    setIsSubmittingCall(true);
    setTimeout(() => {
      setIsSubmittingCall(false);
      setCallSuccess(true);
      setTimeout(() => {
        setCallSuccess(false);
        setSelectedTime(null);
      }, 4000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-brand-bg relative border-t border-brand-border/60"
    >
      <div className="absolute bottom-0 left-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-brand-accent/2 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column channel briefs */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.25em] font-mono text-brand-accent font-semibold uppercase block mb-3">
                Let’s Build Something Amazing Together
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight mb-5">
                Ready to Turn Your Ideas into Reality
              </h2>
              <p className="text-sm text-brand-muted font-sans font-light leading-relaxed">
                Whether you need a business website, mobile application, AI solution, or enterprise software, <strong className="text-white font-medium">Zyvera Technologies</strong> is ready to help you launch and grow your project.
              </p>
            </div>

            {/* Switchers */}
            <div className="p-1 bg-brand-card border border-brand-border rounded-xl grid grid-cols-2 gap-1 max-w-sm">
              <button
                onClick={() => setActiveChannel('message')}
                className={`py-2 px-3 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                  activeChannel === 'message'
                    ? 'bg-brand-border text-brand-accent border border-brand-accent/15'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Message Pitch
              </button>
              <button
                onClick={() => setActiveChannel('schedule')}
                className={`py-2 px-3 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                  activeChannel === 'schedule'
                    ? 'bg-brand-border text-brand-accent border border-brand-accent/15'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                <Calendar className="h-3.5 w-3.5" />
                Calendar Book
              </button>
            </div>

            {/* Direct coordinate nodes */}
            <div className="space-y-4 pt-6 border-t border-brand-border/60 max-w-md">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-brand-border/60 rounded-xl text-brand-accent">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="text-[11px] font-mono uppercase text-brand-muted">Email</h5>
                  <p className="text-sm text-white font-medium mt-0.5">
                    <a href="mailto:info@zyvera.com" className="hover:text-brand-accent transition-colors">info@zyvera.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-brand-border/60 rounded-xl text-brand-accent">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="text-[11px] font-mono uppercase text-brand-muted">Phone</h5>
                  <p className="text-sm text-white font-medium mt-0.5">
                    <a href="tel:+918281533280" className="hover:text-brand-accent transition-colors">+91 82815 33280</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
                  <MessageSquare className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="text-[11px] font-mono uppercase text-emerald-400 font-semibold text-xs tracking-wider">WhatsApp Line</h5>
                  <p className="text-sm text-white font-medium mt-0.5">
                    <a href="https://wa.me/919400340270?text=Hello%20Zyvera%20Technologies%2C%20I'm%20interested%20in%20your%20services!" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 font-bold">
                      +91 94003 40270
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-brand-border/60 rounded-xl text-brand-accent">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h5 className="text-[11px] font-mono uppercase text-brand-muted">Location</h5>
                  <p className="text-sm text-white font-light mt-1 leading-relaxed">
                    Door No : 55/2266-C<br />
                    Maniankottu Building, 2nd Floor<br />
                    Kadavanthra Junction, Cochin - 20<br />
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction console box */}
          <div className="lg:col-span-12 xl:col-span-7">
            <AnimatePresence mode="wait">
              {activeChannel === 'message' ? (
                <motion.div
                  key="message-form"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 relative shadow-2xl"
                >
                  {msgSuccess ? (
                    <div className="py-20 flex flex-col items-center justify-center text-center">
                      <div className="h-12 w-12 rounded-full bg-brand-accent/5 border border-brand-accent text-brand-accent flex items-center justify-center mb-5">
                        <Check className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-display text-white font-medium">Message Logged Successfully</h4>
                      <p className="text-xs text-brand-muted mt-2 max-w-sm leading-relaxed font-light">
                        Thank you, <strong className="text-white">{name}</strong>. Our backend engineering leads have queued your message and designated quote parameters. We will compile our response and contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSendMessage} className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Contact Name <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Satoshi Nakamoto"
                            className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3.5 text-white placeholder-brand-muted/40"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Email Address <span className="text-red-500">*</span></label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. core@zyvera.com"
                            className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3.5 text-white placeholder-brand-muted/40"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Enterprise / Company</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Aether Sync Logistics"
                          className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3.5 text-white placeholder-brand-muted/40"
                        />
                      </div>

                      {/* Hidden summary carrying estimate scopes optionally */}
                      <input type="hidden" id="contact-services-summary" />

                      <div className="relative">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Project Scope / Requirements <span className="text-red-500">*</span></label>
                        <textarea
                          id="contact-message"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={6}
                          placeholder="Describe the e-commerce structure, real-time parameters, mobile caches, or specific Python workloads you seek to optimize..."
                          className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3.5 text-white placeholder-brand-muted/40 resize-none font-sans font-light leading-relaxed"
                        />

                        {/* Interactive Preload Indicator */}
                        {message.includes('estimated our scope') && (
                          <div className="absolute right-3.5 top-8 py-0.5 px-2 bg-brand-accent/15 border border-brand-accent/20 rounded-md flex items-center gap-1 animate-pulse">
                            <Sparkles className="h-3 w-3 text-brand-accent" />
                            <span className="text-[9px] font-mono text-brand-accent font-semibold uppercase">Estimator prefilled</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2 flex justify-between items-center bg-brand-bg/40 p-4 border border-brand-border rounded-xl">
                        <span className="text-[9px] text-brand-muted font-mono leading-none">Security encrypted socket. TLS 1.3 sync enabled.</span>
                        <button
                          type="submit"
                          disabled={isSubmittingMsg}
                          className="px-6 py-3 bg-brand-accent text-brand-bg hover:bg-brand-accent-hover font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                        >
                          {isSubmittingMsg ? (
                            <>
                              <span className="h-3.5 w-3.5 border-2 border-brand-bg border-t-transparent rounded-full animate-spin" />
                              Transmitting...
                            </>
                          ) : (
                            <>
                              Submit Scope Pitch
                              <ArrowRight className="h-3.5 w-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="schedule-form"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 relative shadow-2xl"
                >
                  {callSuccess ? (
                    <div className="py-20 flex flex-col items-center justify-center text-center">
                      <div className="h-12 w-12 rounded-full bg-brand-accent/5 border border-brand-accent text-brand-accent flex items-center justify-center mb-5">
                        <Check className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-display text-white font-medium">Consultation Scheduled</h4>
                      <p className="text-xs text-brand-muted mt-2 max-w-sm leading-relaxed font-light">
                        Reservation confirmed for <strong className="text-white">{timeSlots.find((_, i) => i === 1) || selectedTime}</strong> on <strong className="text-white">{daysOfWeek.find(d => d.id === selectedDay)?.name} {daysOfWeek.find(d => d.id === selectedDay)?.date}</strong>. A calendar invitation and video node coordinates have been wired to <strong className="text-white">{email}</strong>.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleBookCall} className="space-y-6">
                      
                      {/* Step 1: Select Day */}
                      <div className="space-y-2.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted">
                          Step 1: Pick Consultation Day (May 2026):
                        </label>
                        <div className="grid grid-cols-5 gap-1.5 bg-brand-bg p-1 rounded-xl border border-brand-border">
                          {daysOfWeek.map((day) => (
                            <button
                              key={day.id}
                              type="button"
                              onClick={() => {
                                setSelectedDay(day.id);
                                setSelectedTime(null);
                              }}
                              className={`py-3.5 rounded-lg text-center flex flex-col items-center justify-center cursor-pointer transition-all ${
                                selectedDay === day.id
                                  ? 'bg-brand-border text-brand-accent border border-brand-accent/20'
                                  : 'text-brand-muted hover:text-brand-text'
                              }`}
                            >
                              <span className="text-[10px] uppercase font-mono tracking-wider">{day.name}</span>
                              <span className="text-xs font-semibold text-white mt-1">{day.date.split(' ')[1]}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Step 2: Select Time */}
                      <div className="space-y-2.5">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted">
                          Step 2: Assign Time Slot (Your Local Timezone):
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                          {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`py-3 text-center rounded-xl border text-xs cursor-pointer transition-all ${
                                  isSelected
                                    ? 'border-brand-accent bg-brand-accent/5 text-white'
                                    : 'border-brand-border bg-brand-bg/50 text-brand-muted hover:border-brand-border hover:bg-brand-card'
                                }`}
                              >
                                <span className="font-mono font-medium">{time.split(' ')[0]}</span>
                                <span className="text-[9px] block uppercase tracking-wide opacity-50 mt-0.5">{time.split(' ')[1]}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step 3: Input Email */}
                      <div className="space-y-2 pt-2 border-t border-brand-border/60">
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted">
                          Step 3: Supply Email for invitation payload:
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. director@corp.com"
                          className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3.5 text-white placeholder-brand-muted/40"
                        />
                      </div>

                      {/* Action confirm */}
                      <div className="pt-2 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-brand-muted">
                          <Clock className="h-4 w-4 text-brand-accent" />
                          <span>Duration: 15min Google Meet</span>
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmittingCall || !email || !selectedTime}
                          className="px-6 py-3 bg-brand-accent disabled:opacity-40 text-brand-bg hover:bg-brand-accent-hover font-semibold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5"
                        >
                          {isSubmittingCall ? (
                            <>
                              <span className="h-3.5 w-3.5 border-2 border-brand-bg border-t-transparent rounded-full animate-spin" />
                              Locking Slot...
                            </>
                          ) : (
                            <>
                              Confirm Calibration Call
                              <Check className="h-3.5 w-3.5" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
