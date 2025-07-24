'use client';

import { useState, type FC, type ChangeEvent, type ReactNode, type InputHTMLAttributes } from 'react';
import type { ReactElement } from 'react';

// --- Type Definitions ---

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  teamSize: string;
  whatYouDo: string;
  partyDept: string;
  oldSchoolTasks: string[];
  otherOldSchool: string;
  painPoints: string[];
  wishes: string;
  snapTask: string;
  tools: string;
  timeline: string;
  finalComments: string;
}

// Props for our components
interface ArrowIconProps {
  className?: string;
}

interface FormLabelProps {
  children: ReactNode;
}

// Extends standard input attributes for our custom component
interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}


// --- Component Definitions ---

const steps: string[] = [
  'Basic Info',
  'About Your Business',
  'Pain Points',
  'Dream Outcomes',
  'Final Touches',
];

// Re-introducing the FloatingLabelInput component for specific fields
const commonInputStyles = "peer block w-full rounded-lg border border-white/30 bg-transparent px-3 py-3 text-white focus:border-white focus:outline-none focus:ring-0";
const commonLabelStyles = "absolute left-3 top-0 z-10 origin-[0] -translate-y-1/2 scale-75 transform text-neutral-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-white";
const labelCutoutStyles = "bg-bg-light px-1";

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({ id, label, ...props }) => (
  <div className="relative">
    <input id={id} className={commonInputStyles} placeholder=" " {...props} />
    <label htmlFor={id} className={`${commonLabelStyles} ${labelCutoutStyles}`}>
      {label}
    </label>
  </div>
);

const ArrowIcon: FC<ArrowIconProps> = ({ className = '' }) => (
  <svg className={`h-6 w-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const FormLabel: FC<FormLabelProps> = ({ children }) => (
  <label className="mb-4 block text-sm font-medium text-neutral-300">{children}</label>
);

export default function AutomationForm(): ReactElement {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', company: '',
    website: '', industry: '', teamSize: '', whatYouDo: '', partyDept: '',
    oldSchoolTasks: [], otherOldSchool: '', painPoints: [], wishes: '',
    snapTask: '', tools: '', timeline: '', finalComments: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field: 'oldSchoolTasks' | 'painPoints', option: string): void => {
    setFormData(prev => {
      const currentSelection = new Set(prev[field]);
      if (currentSelection.has(option)) {
        currentSelection.delete(option);
      } else {
        currentSelection.add(option);
      }
      return { ...prev, [field]: Array.from(currentSelection) };
    });
  };

  const next = (): void => setStep(s => Math.min(s + 1, steps.length - 1));
  const back = (): void => setStep(s => Math.max(s - 1, 0));

  const progressPercentage = ((step + 1) / steps.length) * 100;
  const standardInputClass = "block w-full rounded-lg border border-white/30 bg-transparent px-3 py-3 text-white placeholder:text-neutral-400 focus:border-white focus:outline-none focus:ring-0";

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-700/50 bg-bg-light text-white shadow-2xl shadow-black/20">
        <div className="p-8 sm:p-12">
          <div className="mb-8">
            <h2 className="mb-3 text-2xl font-bold tracking-tight">{steps[step]}</h2>
            <div className="h-2 w-full rounded-full bg-neutral-700">
              <div className="h-2 rounded-full bg-white transition-all duration-500 ease-in-out" style={{ width: `${progressPercentage}%` }} />
            </div>
          </div>

          <div className="mt-12">
            <div className="space-y-8">
              {step === 0 && (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <FloatingLabelInput id="firstName" name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} />
                  <FloatingLabelInput id="lastName" name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} />
                  <FloatingLabelInput id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} />
                  <FloatingLabelInput id="phone" name="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} />
                  <div className="sm:col-span-2">
                    <FloatingLabelInput id="company" name="company" label="Company Name" value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="sm:col-span-2">
                    <FloatingLabelInput id="website" name="website" label="Website" type="url" value={formData.website} onChange={handleChange} />
                  </div>
                  <select name="industry" className={standardInputClass} value={formData.industry} onChange={handleChange}>
                    <option value="" disabled>Select Industry...</option>
                    <option value="E-commerce Brands">E-commerce Brands</option>
                    <option value="Agencies">Agencies</option>
                    <option value="Coaching & Education">Coaching & Education</option>
                  </select>
                  <select name="teamSize" className={standardInputClass} value={formData.teamSize} onChange={handleChange}>
                    <option value="" disabled>Select Team Size...</option>
                    <option value="1-10">Just Me or Small Team (1-10)</option>
                    <option value="11-50">Growing Team (11-50)</option>
                    <option value="51+">Large and In Charge (51+)</option>
                  </select>
                </div>
              )}
              {step === 1 && (
                <div className="space-y-8">
                  <textarea name="whatYouDo" placeholder="Explain what your business does (in simple terms)" className={`${standardInputClass} h-28`} value={formData.whatYouDo} onChange={handleChange} />
                  <textarea name="partyDept" placeholder="Which dept. would celebrate most if automated?" className={`${standardInputClass} h-28`} value={formData.partyDept} onChange={handleChange} />
                  <div>
                    <FormLabel>Which of these tasks are done the old-school way?</FormLabel>
                    <div className="space-y-3">
                      {['Chatting with customers', 'Sending out emails', 'Managing tasks', 'Client Onboarding', 'Contract Sending', 'Managing KPIs'].map(option => (
                        <label key={option} className="flex cursor-pointer items-center rounded-lg bg-neutral-800/80 p-3 transition-colors hover:bg-neutral-700/80">
                          <input type="checkbox" className="h-5 w-5 rounded border-neutral-600 bg-neutral-700 text-accent focus:ring-accent" checked={formData.oldSchoolTasks.includes(option)} onChange={() => handleCheckboxChange('oldSchoolTasks', option)} />
                          <span className="ml-4 text-sm font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <FormLabel>What are your biggest operational headaches?</FormLabel>
                    <div className="space-y-3">
                      {['Never-ending repetitive tasks', 'Silly (but costly) manual errors', 'My team is bogged down with admin work', 'We own software we barely use', 'Our systems don’t talk to each other'].map(option => (
                        <label key={option} className="flex cursor-pointer items-center rounded-lg bg-neutral-800/80 p-3 transition-colors hover:bg-neutral-700/80">
                          <input type="checkbox" className="h-5 w-5 rounded border-neutral-600 bg-neutral-700 text-accent focus:ring-accent" checked={formData.painPoints.includes(option)} onChange={() => handleCheckboxChange('painPoints', option)} />
                          <span className="ml-4 text-sm font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <textarea name="wishes" placeholder="If you had 3 automation wishes, what would they be?" className={`${standardInputClass} h-28`} value={formData.wishes} onChange={handleChange} />
                </div>
              )}
              {step === 3 && (
                <div className="space-y-8">
                  <textarea name="snapTask" placeholder="Automate 1 task by snapping your fingers..." className={`${standardInputClass} h-28`} value={formData.snapTask} onChange={handleChange} />
                  <textarea name="tools" placeholder="Specific tools or software to integrate?" className={`${standardInputClass} h-28`} value={formData.tools} onChange={handleChange} />
                  <select name="timeline" className={standardInputClass} value={formData.timeline} onChange={handleChange}>
                    <option value="" disabled>Ideal timeline...</option>
                    <option value="Yesterday">Yesterday!</option>
                    <option value="2-3 Weeks">In the next 2–3 Weeks</option>
                    <option value="3-6 Weeks">Somewhere between 3–6 Weeks</option>
                    <option value="3+ Months">Playing the long game (3+ Months)</option>
                  </select>
                </div>
              )}
              {step === 4 && (
                <div className="text-center">
                  <textarea name="finalComments" placeholder="Anything else you'd like to add?" className={`${standardInputClass} h-32`} value={formData.finalComments} onChange={handleChange} />
                </div>
              )}
            </div>

            <div className="mt-12 flex items-center justify-end gap-x-3">
              <button onClick={back} className={`p-2 rounded-full text-neutral-400 transition-all hover:bg-white/10 hover:text-white ${step === 0 ? 'pointer-events-none opacity-0' : 'opacity-100'}`} aria-label="Go Back" disabled={step === 0}>
                <ArrowIcon className="rotate-180 transform" />
              </button>
              {step < steps.length - 1 ? (
                <button onClick={next} className="p-2 rounded-full text-neutral-400 transition-all hover:bg-white/10 hover:text-white" aria-label="Go Next">
                  <ArrowIcon />
                </button>
              ) : (
                <button className='px-4 py-2 bg-foreground text-background rounded-lg hover:bg-bg-light transition transition-duration-500 ease-in-out border hover:border-white/10 hover:text-foreground'>
                  Generate My Plan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}