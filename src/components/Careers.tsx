import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, DollarSign, Clock, CheckCircle2, ChevronDown, ChevronUp, UploadCloud, X, Paperclip, Check } from 'lucide-react';
import { JOBS } from '../data';
import { Job } from '../types';

export default function Careers() {
  const [filterDepartment, setFilterDepartment] = useState<'all' | 'Development' | 'Design' | 'AI & Data' | 'Marketing'>('all');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [appliedJob, setAppliedJob] = useState<Job | null>(null);
  
  // Application form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [link, setLink] = useState('');
  const [note, setNote] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const departments = ['all', 'Development', 'Design', 'AI & Data', 'Marketing'] as const;

  const filteredJobs = JOBS.filter(job => {
    if (filterDepartment === 'all') return true;
    return job.department === filterDepartment;
  });

  const handleToggleExpand = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  // Drag and drop handlers for upload area
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleClearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !uploadedFile) return;

    setIsSubmitting(true);
    // Simulate API pipeline transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      // Reset form variables
      setTimeout(() => {
        setSubmissionSuccess(false);
        setAppliedJob(null);
        setApplicantName('');
        setApplicantEmail('');
        setLink('');
        setNote('');
        setUploadedFile(null);
      }, 3000);
    }, 2000);
  };

  return (
    <section 
      id="careers" 
      className="py-24 bg-brand-bg relative border-t border-brand-border/60"
    >
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-accent/2 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl">
          <span className="text-[10px] tracking-[0.25em] font-mono text-brand-accent font-semibold uppercase block mb-3">
            Join Zyvera
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-tight">
            We are Hiring the Next Generation of Craftsmen
          </h2>
          <p className="text-sm text-brand-muted font-sans font-light mt-3 leading-relaxed">
            We do not compromise. We seek ambitious engineers who build standard-compliant apps, design systems, and modern logic. We are pleased to offer our specialized <strong className="text-brand-accent">Paid Internship Program for Python Software Engineers</strong> alongside our senior roles, providing rapid direct mentorship and pathways to full-time engineering.
          </p>
        </div>

        {/* Career Department Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-brand-border pb-4">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => {
                setFilterDepartment(dept);
                setExpandedJobId(null);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase cursor-pointer transition-all ${
                filterDepartment === dept
                  ? 'bg-brand-border text-brand-accent border border-brand-accent/20'
                  : 'text-brand-muted hover:text-brand-text'
              }`}
            >
              {dept === 'all' ? 'All Roles' : dept}
            </button>
          ))}
        </div>

        {/* Job Openings list */}
        <div className="space-y-4 text-left">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center text-brand-muted border border-dashed border-brand-border rounded-xl font-sans font-light text-xs"
              >
                No active openings in this department right now. Message us if you think we need your skill!
              </motion.div>
            ) : (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <motion.div
                    layout
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-brand-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'border-brand-accent bg-brand-card/90' : 'border-brand-border'
                    }`}
                  >
                    {/* Header bar click trigger */}
                    <button
                      onClick={() => handleToggleExpand(job.id)}
                      className="w-full p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] uppercase font-mono tracking-wider text-brand-accent px-2 py-0.5 rounded bg-brand-accent/5 border border-brand-accent/10 font-semibold">
                            {job.department}
                          </span>
                          <span className="text-[10px] font-mono text-brand-muted flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-display text-white font-medium">
                          {job.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="hidden sm:block text-right">
                          <p className="text-xs font-mono text-white font-semibold">{job.salaryRange}</p>
                          <p className="text-[10px] uppercase text-brand-muted tracking-wider font-mono mt-0.5">{job.type}</p>
                        </div>
                        <div className="p-2 rounded-lg border border-brand-border text-brand-muted group-hover:text-white transition-colors">
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </div>
                      </div>
                    </button>

                    {/* Expandable Details Container */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden border-t border-brand-border/60"
                        >
                          <div className="p-6 bg-brand-bg/40 space-y-6">
                            {/* Mobile specific stats */}
                            <div className="grid grid-cols-2 gap-4 sm:hidden pb-4 border-b border-brand-border/60">
                              <div>
                                <p className="text-[10px] uppercase text-brand-muted tracking-wider font-mono">Compensation</p>
                                <p className="text-xs font-semibold text-white mt-0.5">{job.salaryRange}</p>
                              </div>
                              <div>
                                <p className="text-[10px] uppercase text-brand-muted tracking-wider font-mono">Position Type</p>
                                <p className="text-xs font-semibold text-white mt-0.5">{job.type}</p>
                              </div>
                            </div>

                            {/* Job Description */}
                            <div>
                              <h5 className="text-[10px] uppercase tracking-wider font-mono text-brand-accent font-semibold mb-2">Role Blueprint</h5>
                              <p className="text-xs sm:text-sm text-brand-muted font-sans font-light leading-relaxed">
                                {job.description}
                              </p>
                            </div>

                            {/* Requirements */}
                            <div>
                              <h5 className="text-[10px] uppercase tracking-wider font-mono text-brand-accent font-semibold mb-3">Technical Qualifications</h5>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-brand-muted font-light">
                                    <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h5 className="text-[10px] uppercase tracking-wider font-mono text-brand-accent font-semibold mb-3 font-medium">Zyvera Perks & Benefits</h5>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {job.benefits.map((ben, i) => (
                                  <div key={i} className="p-3 bg-brand-card border border-brand-border/80 rounded-xl text-left">
                                    <span className="text-[9px] font-mono text-brand-accent tracking-wider font-bold block mb-1">0{i+1} BENEFIT</span>
                                    <span className="text-[11px] text-brand-muted leading-relaxed font-light">{ben}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* CTA block */}
                            <div className="flex justify-end pt-4 border-t border-brand-border/60">
                              <button
                                onClick={() => setAppliedJob(job)}
                                className="px-5 py-2.5 bg-brand-accent text-brand-bg hover:bg-brand-accent-hover font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                              >
                                Apply to this position
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

        {/* Career Application Form Modal */}
        <AnimatePresence>
          {appliedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-bg/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-brand-card border border-brand-border rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
              >
                {/* Header info */}
                <button
                  onClick={() => setAppliedJob(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg border border-brand-border text-brand-muted hover:text-white hover:bg-brand-border transition-colors cursor-pointer"
                  disabled={isSubmitting}
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="text-left mb-6">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-brand-accent block mb-1.5">Application Portal</span>
                  <h4 className="text-lg font-display font-semibold text-white">
                    Apply for {appliedJob.title}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1 font-light"> Zyvera Technologies • Recruitment Division </p>
                </div>

                {/* Form Body layout */}
                {submissionSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="h-12 w-12 rounded-full border border-brand-accent text-brand-accent bg-brand-accent/5 flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 animate-bounce" />
                    </div>
                    <h5 className="text-base font-semibold text-white">Application Received Successfully!</h5>
                    <p className="text-xs text-brand-muted mt-2 max-w-xs font-light leading-relaxed">
                      Thank you, <strong className="text-white">{applicantName}</strong>. Our primary engineering leads will inspect your credentials and reach out to <strong className="text-white">{applicantEmail}</strong> within 48 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="space-y-4 text-left">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g. Linus Torvalds"
                        className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-white placeholder-brand-muted/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="e.g. designer@zyvera.com"
                        className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-white placeholder-brand-muted/50"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Portfolio or GitHub URL</label>
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="e.g. https://github.com/coder"
                        className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-white placeholder-brand-muted/50"
                      />
                    </div>

                    {/* UX compliant File upload zones */}
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">
                        Submit CV / Resume (PDF / Docx) <span className="text-red-500">*</span>
                      </label>
                      
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={triggerFileSelect}
                        className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                          isDragging 
                            ? 'border-brand-accent bg-brand-accent/5' 
                            : uploadedFile 
                              ? 'border-brand-accent/60 bg-brand-bg/40' 
                              : 'border-brand-border hover:border-brand-accent/40 bg-brand-bg/20'
                        }`}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          required
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />

                        {uploadedFile ? (
                          <div className="flex items-center gap-2 text-xs text-white">
                            <Paperclip className="h-4 w-4 text-brand-accent" />
                            <span className="font-mono truncate max-w-[200px]">{uploadedFile.name}</span>
                            <span className="text-[10px] text-brand-muted">({Math.round(uploadedFile.size / 1024)} KB)</span>
                            <button
                              type="button"
                              onClick={handleClearFile}
                              className="p-1 hover:bg-brand-border text-brand-muted hover:text-white rounded ml-2"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <UploadCloud className="h-6 w-6 text-brand-muted" />
                            <p className="text-xs text-slate-300">
                              <span className="font-bold text-brand-accent">Drag & Drop Resume</span> or click to browse
                            </p>
                            <p className="text-[9px] text-brand-muted font-mono uppercase">Supported files: PDF, DOC (Max 5MB)</p>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-brand-muted mb-1.5">Short Message / Bio</label>
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                        placeholder="In a brief sentence, tell us how you can level up our architecture..."
                        className="w-full bg-brand-bg text-xs border border-brand-border focus:border-brand-accent focus:outline-none rounded-xl px-4 py-3 text-white placeholder-brand-muted/50 resize-none"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between gap-4">
                      <span className="text-[9px] text-brand-muted font-mono block">By submitting, you agree to our recruitment guidelines.</span>
                      <button
                        type="submit"
                        disabled={isSubmitting || !applicantName || !applicantEmail || !uploadedFile}
                        className="px-5 py-2.5 bg-brand-accent disabled:opacity-40 text-brand-bg font-semibold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-all shrink-0 flex items-center gap-1.5"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-3 w-3 border-2 border-brand-bg border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Lock Application'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
