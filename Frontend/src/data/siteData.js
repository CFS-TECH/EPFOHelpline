export const LEAD_CONFIG = {
  phoneDisplay: '+91 63981 49627',
  phoneDial: '+916398149627',
  whatsappNumber: '916398149627',
  email: 'support@pfhelpline.com',
  workingHours: 'Mon – Sat | 9:30 AM – 6:30 PM'
};

export function getWhatsAppUrl({
  service = 'PF Assistance',
  name = '',
  phone = '',
  category = '',
  details = ''
} = {}) {
  const lines = [
    `🔔 *NEW PF ENQUIRY*`,
    `──────────────────`,
    `📌 *Service:* ${service}`
  ];
  if (category) lines.push(`🏷️ *Category:* ${category}`);
  if (name) lines.push(`👤 *Name:* ${name}`);
  if (phone) lines.push(`📞 *Mobile:* ${phone}`);
  if (details) lines.push(`📝 *Details / Query:* ${details}`);
  lines.push(`──────────────────`);
  lines.push(`Please guide me on the solution and required process.`);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${LEAD_CONFIG.whatsappNumber}?text=${text}`;
}

export function openWhatsApp(url) {
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = url;
    }
  } catch {
    window.location.href = url;
  }
}

export const PHOTOS = {
  heroMain:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85',
  heroSecondary:
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  heroAvatars: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  ],
  aboutPrimary:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=85',
  aboutSecondary:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  whyFeature:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85',
  ctaBg:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
};

export const SERVICE_CATEGORIES = [
  {
    id: 'employee-pf-services',
    number: '01',
    title: '1. Employee PF Services',
    shortTitle: 'Employee PF Services',
    subtitle: 'Complete support for withdrawals, transfers, UAN, KYC updates, profile corrections, and claim issues.',
    bannerImage:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
    services: [
      {
        id: 'pf-withdrawal-assistance',
        title: 'PF Withdrawal Assistance',
        group: 'Claims & Withdrawals',
        iconName: 'Wallet',
        desc: 'Guidance on full PF final settlement (Form 19) and partial advance withdrawals (Form 31).',
        WhatWeDo: [
          'Eligibility verification for Full PF Settlement (Form 19) & Partial Advance (Form 31)',
          'Pre-check of KYC, Bank IFSC, and Date of Exit to avoid claim rejection',
          'Step-by-step online claim filing guidance and status tracking'
        ],
        docs: ['Active UAN & Registered Mobile Number', 'Aadhaar & PAN Card linked with UAN', 'Cancelled Cheque / Bank Passbook with clear IFSC']
      },
      {
        id: 'pf-transfer-assistance',
        title: 'PF Transfer Assistance',
        group: 'Claims & Withdrawals',
        iconName: 'ArrowLeftRight',
        desc: 'Support in transferring PF balance from previous employer accounts to your current UAN (Form 13).',
        WhatWeDo: [
          'Online Form 13 PF transfer guidance from old Member IDs to present employer',
          'Assistance with exempted trust transfers and Annexure-K tracking',
          'Verification of Date of Joining & Date of Exit overlaps before transfer'
        ],
        docs: ['Active UAN Number', 'Previous & Current PF Member IDs', 'Verified Aadhaar & Bank KYC']
      },
      {
        id: 'pf-balance-check',
        title: 'PF Balance Check',
        group: 'UAN & Account',
        iconName: 'Wallet',
        desc: 'Assistance with passbook access, member-wise balance verification, and interest credit check.',
        WhatWeDo: [
          'EPF Passbook login & troubleshooting for member-wise PF and Pension balances',
          'Verification of employer monthly contributions and annual interest credits',
          'Identification of unmerged balance lying in old PF Member IDs'
        ],
        docs: ['12-Digit UAN Number', 'Registered Mobile Number', 'Member ID / Salary Slip (if UAN unknown)']
      },
      {
        id: 'uan-generation-activation',
        title: 'UAN Generation & Activation',
        group: 'UAN & Account',
        iconName: 'ShieldCheck',
        desc: 'Step-by-step guidance for new UAN generation, first-time activation, and Aadhaar OTP verification.',
        WhatWeDo: [
          'First-time UAN activation on the Unified Member Portal',
          'Aadhaar-based UAN generation & existing UAN discovery support',
          'Password creation and initial profile setup'
        ],
        docs: ['Aadhaar Card with active linked mobile number', 'PAN Card', 'PF Member ID or Pay Slip']
      },
      {
        id: 'uan-related-issues',
        title: 'UAN Related Issues',
        group: 'UAN & Account',
        iconName: 'ShieldCheck',
        desc: 'Resolution for login errors, forgotten passwords, inactive mobile numbers, and UAN account blocks.',
        WhatWeDo: [
          'Forgot password recovery & mobile number update when old number is lost',
          'Resolution for "Aadhaar already linked to another UAN" or login errors',
          'Diagnostic check of UAN profile and service records'
        ],
        docs: ['UAN Number', 'Aadhaar Card (linked with current mobile)', 'PAN Card & Basic Employment Details']
      },
      {
        id: 'pf-kyc-update',
        title: 'PF KYC Update',
        group: 'KYC & Linking',
        iconName: 'FileCheck2',
        desc: 'Complete verification and update guidance for mandatory KYC details in your EPF profile.',
        WhatWeDo: [
          'Audit of Aadhaar, PAN, and Bank KYC seeding status on UAN portal',
          'Guidance on re-submitting rejected or pending KYC requests',
          'Coordination checklist for digital approval & verification'
        ],
        docs: ['Aadhaar Card', 'PAN Card', 'Bank Passbook or Cancelled Cheque with IFSC']
      },
      {
        id: 'aadhaar-linking',
        title: 'Aadhaar Linking',
        group: 'KYC & Linking',
        iconName: 'FileCheck2',
        desc: 'Support for seeding and verifying Aadhaar with your UAN for seamless online claim submission.',
        WhatWeDo: [
          'Online e-KYC Aadhaar linking with UAN profile',
          'Demographic match verification (Name, DOB, Gender) between UAN and Aadhaar',
          'Guidance on Joint Declaration when Aadhaar details differ from PF records'
        ],
        docs: ['12-Digit Aadhaar Card', 'UAN Number', 'Aadhaar-linked Mobile Number for OTP']
      },
      {
        id: 'bank-account-update',
        title: 'Bank Account Update',
        group: 'KYC & Linking',
        iconName: 'FileCheck2',
        desc: 'Guidance on updating active bank account numbers and correct IFSC codes to avoid payment failures.',
        WhatWeDo: [
          'Updating new bank account & IFSC code in UAN KYC section',
          'Fixing claim rejections caused by merged bank IFSC codes or closed accounts',
          'Ensuring printed name on cheque/passbook matches UAN record'
        ],
        docs: ['Cancelled Cheque (with printed name) or Bank Passbook', 'Active UAN & Aadhaar OTP']
      },
      {
        id: 'pan-linking',
        title: 'PAN Linking',
        group: 'KYC & Linking',
        iconName: 'FileCheck2',
        desc: 'Assistance with PAN card seeding in UAN to prevent avoidable TDS deductions on PF withdrawals.',
        WhatWeDo: [
          'Seeding PAN card in UAN KYC to save 20%–30% TDS on eligible withdrawals',
          'Guidance on Form 15G / 15H upload along with PAN verification',
          'Name alignment check between PAN and EPF profile'
        ],
        docs: ['PAN Card', 'UAN Number & Password', 'Aadhaar-linked Mobile for OTP']
      },
      {
        id: 'name-correction',
        title: 'Name Correction in PF Account',
        group: 'Profile Corrections',
        iconName: 'UserCheck',
        desc: 'SOP-compliant Joint Declaration & document support to fix spelling or name mismatches in PF.',
        WhatWeDo: [
          'Assessment of Minor vs. Major Name Correction as per latest EPFO SOP',
          'Online Joint Declaration submission guidance with required identity proofs',
          'Preparation of supporting documents for employer & field office verification'
        ],
        docs: ['Aadhaar Card & PAN Card', 'Passport / 10th Marksheet / Birth Certificate', 'Appointment Letter or Pay Slip']
      },
      {
        id: 'dob-correction',
        title: 'Date of Birth Correction',
        group: 'Profile Corrections',
        iconName: 'UserCheck',
        desc: 'Structured documentation guidance to align your PF Date of Birth with Aadhaar and birth proofs.',
        WhatWeDo: [
          'Guidance on correcting DOB mismatch (<3 years minor or >3 years major variation)',
          'Compilation of mandatory birth proofs required under EPFO SOP guidelines',
          'Step-by-step online Joint Declaration filing support'
        ],
        docs: ['Birth Certificate or 10th/SSC Marksheet', 'Passport / PAN / Aadhaar Card', 'Employer Appointment / Service Record']
      },
      {
        id: 'father-husband-name-correction',
        title: 'Father / Husband Name Correction',
        group: 'Profile Corrections',
        iconName: 'UserCheck',
        desc: 'Assistance in correcting Father or Spouse name mismatches in EPFO member records.',
        WhatWeDo: [
          'Updating missing or misspelled Father/Husband name and relationship flag in UAN',
          'Joint Declaration document preparation and online upload guidance',
          'Preventing final settlement rejections due to father/spouse name errors'
        ],
        docs: ['Aadhaar Card / Passport / Driving License showing Father/Spouse name', 'Marriage Certificate (if updating Husband name)', '10th Marksheet or Ration Card']
      },
      {
        id: 'doj-doe-correction',
        title: 'Date of Joining / Exit Correction',
        group: 'Profile Corrections',
        iconName: 'UserCheck',
        desc: 'Support for updating missing Date of Exit (DOE) or fixing incorrect joining/leaving dates.',
        WhatWeDo: [
          'Online Date of Exit (Mark Exit) update for previous employments',
          'Joint Declaration guidance for fixing wrong Date of Joining (DOJ) or Date of Exit (DOE)',
          'Resolving overlapping service dates across two employers'
        ],
        docs: ['Relieving Letter / Experience Certificate', 'Appointment Letter & Last Salary Slip', 'PF Passbook Statement']
      },
      {
        id: 'pf-claim-status',
        title: 'PF Claim Status Assistance',
        group: 'Claims & Withdrawals',
        iconName: 'Compass',
        desc: 'Tracking under-process claims and understanding stage-wise field office verification updates.',
        WhatWeDo: [
          'Real-time status check of submitted Form 19, 10C, 31, and Form 13 claims',
          'Clarity on "Under Process", "Sent to Field Office", or "Payment Under Process" stages',
          'Escalation guidance if claim exceeds standard processing timelines'
        ],
        docs: ['UAN Number', 'Claim Tracking ID / Acknowledgement PDF']
      },
      {
        id: 'pf-claim-rejection',
        title: 'PF Claim Rejection Assistance',
        group: 'Claims & Withdrawals',
        iconName: 'FolderCheck',
        desc: 'Root-cause diagnosis of rejected PF claims and corrective action for successful re-application.',
        WhatWeDo: [
          'Detailed analysis of technical EPFO rejection remarks (EPS issue, cheque clarity, KYC, service overlap)',
          'Step-by-step rectification of the underlying profile or passbook issue',
          'Fresh error-free claim re-submission guidance'
        ],
        docs: ['Claim Rejection Screenshot / Passbook Copy', 'UAN Credentials', 'Updated Bank Cheque & KYC Proofs']
      },
      {
        id: 'e-nomination-assistance',
        title: 'E-Nomination Assistance',
        group: 'UAN & Account',
        iconName: 'Users',
        desc: 'Guided online filing of family e-Nomination with photo, Aadhaar e-Sign, and nominee details.',
        WhatWeDo: [
          'Profile photo & permanent address update (prerequisites for e-Nomination)',
          'Adding family member / nominee details with percentage share allocation',
          'Completing Aadhaar Virtual ID / OTP e-Sign so passbook and pension claims work smoothly'
        ],
        docs: ['Member Passport-Size Photo (digital)', 'Nominee Aadhaar Card, DOB & Bank Details', 'Aadhaar-linked Mobile for e-Sign OTP']
      },
      {
        id: 'pf-grievance-assistance',
        title: 'PF Grievance Assistance',
        group: 'Claims & Withdrawals',
        iconName: 'MessageSquareText',
        desc: 'Structured filing and follow-up of EPFiGMS grievances for delayed claims, transfers, or KYC.',
        WhatWeDo: [
          'Drafting clear, evidence-backed grievances on the EPFiGMS portal',
          'Attaching supporting passbooks, rejection letters, and KYC proofs',
          'Tracking grievance registration number and regional office responses'
        ],
        docs: ['UAN & PF Account Number', 'Supporting PDF Documents / Screenshots of Issue']
      },
      {
        id: 'multiple-pf-account-assistance',
        title: 'Multiple PF Account Related Assistance',
        group: 'UAN & Account',
        iconName: 'ArrowLeftRight',
        desc: 'Consolidation and merging solution for employees holding multiple UANs or unlinked Member IDs.',
        WhatWeDo: [
          'Identifying all historical UANs and PF Member IDs linked to your employment history',
          'Deactivating duplicate UANs and merging old PF balances into your current active UAN',
          'Ensuring continuous EPS service history across merged accounts'
        ],
        docs: ['All UAN Numbers & Previous PF Member IDs', 'Aadhaar, PAN & Bank KYC', 'Service History Details']
      }
    ]
  },
  {
    id: 'pension-related-services',
    number: '02',
    title: '2. Pension & Related Services',
    shortTitle: 'Pension & Death Claims',
    subtitle: 'Dedicated guidance for EPS-95 pension claims, scheme certificates, family pension, and death claim settlements.',
    bannerImage:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80',
    services: [
      {
        id: 'eps-pension-assistance',
        title: 'EPS Pension Assistance',
        group: 'Pension Services',
        iconName: 'Wallet',
        desc: 'Complete guidance on Employees’ Pension Scheme (EPS-95) rules, service eligibility, and benefits.',
        WhatWeDo: [
          'Assessment of total eligible pensionable service (<9.5 years vs. >9.5 years)',
          'Guidance on choosing between Pension Withdrawal Benefit and Scheme Certificate',
          'Verification of EPS contributions and non-contributory period (NCP) days'
        ],
        docs: ['UAN Number & Passbook Copy', 'Service History across all employers', 'Aadhaar & Bank Details']
      },
      {
        id: 'pension-claim-assistance',
        title: 'Pension Claim Assistance',
        group: 'Pension Services',
        iconName: 'FileCheck2',
        desc: 'Support for Form 10C (Pension Withdrawal / Scheme Certificate) and Form 10D (Monthly Pension).',
        WhatWeDo: [
          'Online Form 10C submission for EPS lump-sum withdrawal or Scheme Certificate',
          'Form 10D monthly superannuation / early pension application support (age 50/58+)',
          'Document verification to prevent Form 10C/10D rejection'
        ],
        docs: ['UAN & Aadhaar Card', 'Cancelled Cheque / Bank Passbook (for nationalized/scheduled bank)', 'Family Details & Photographs (for Form 10D)']
      },
      {
        id: 'higher-pension-assistance',
        title: 'Higher Pension Assistance',
        group: 'Pension Services',
        iconName: 'Compass',
        desc: 'Documentation and calculation guidance for eligible higher wage pension applications and queries.',
        WhatWeDo: [
          'Review of Joint Option / Higher Wage Pension application status and demand letters',
          'Verification of historical wage data and PF-to-EPS diversion calculations',
          'Guidance on responding to EPFO field office clarifications'
        ],
        docs: ['Higher Pension Acknowledgement / Track ID', 'Historical PF Statements & Wage Records', 'UAN & PPO Details (if retired)']
      },
      {
        id: 'pension-status-assistance',
        title: 'Pension Status Assistance',
        group: 'Pension Services',
        iconName: 'ShieldCheck',
        desc: 'Tracking PPO (Pension Payment Order) status, Jeevan Pramaan updates, and pension credit issues.',
        WhatWeDo: [
          'Tracking PPO generation and monthly pension disbursement status',
          'Guidance on Digital Life Certificate (Jeevan Pramaan) submission for pensioners',
          'Resolving stopped or delayed monthly pension credits'
        ],
        docs: ['PPO Number or UAN Number', 'Pension Bank Account Details', 'Aadhaar Card']
      },
      {
        id: 'family-pension-assistance',
        title: 'Family Pension Assistance',
        group: 'Family & Death Claims',
        iconName: 'Users',
        desc: 'Compassionate, step-by-step guidance for spouse/children to claim monthly widow/family pension.',
        WhatWeDo: [
          'Complete Form 10D preparation for spouse, children, or dependent parents',
          'Checklist of bank account, age proof, and family certificate requirements',
          'End-to-end support from submission to PPO issuance'
        ],
        docs: ['Death Certificate of Member', 'Spouse & Children Aadhaar, Birth Proof & Bank Passbook', 'Legal Heir / Family Member Certificate & Joint Photographs']
      },
      {
        id: 'edli-death-claim-assistance',
        title: 'EDLI / Death Claim Assistance',
        group: 'Family & Death Claims',
        iconName: 'FolderCheck',
        desc: 'Support in claiming Employees’ Deposit Linked Insurance (EDLI Form 5IF) lump-sum insurance benefits.',
        WhatWeDo: [
          'Eligibility & benefit calculation for EDLI insurance (up to ₹7 Lakhs statutory assurance)',
          'Preparation of composite Death Claim forms (Form 20, Form 10D & Form 5IF)',
          'Guidance on online e-Nomination death claim vs. physical composite death claim'
        ],
        docs: ['Death Certificate of Deceased Employee', 'Nominee / Legal Heir Aadhaar, PAN & Cancelled Cheque', 'Employer Attestation / Death Claim Form (if non-e-Nomination)']
      },
      {
        id: 'pf-settlement-after-death',
        title: 'PF Settlement After Member\'s Death',
        group: 'Family & Death Claims',
        iconName: 'Headset',
        desc: 'End-to-end documentation and Form 20/10D/5IF guidance for nominees and legal heirs.',
        WhatWeDo: [
          'Dedicated priority support for bereaved families to claim PF corpus, EDLI, and Family Pension',
          'Guidance for both registered e-Nominees (online claim) and Legal Heirs (without nomination)',
          'Step-by-step follow-up until all three benefits (PF + EDLI + Pension) are settled'
        ],
        docs: ['Original Death Certificate', 'Nominee / Claimant Aadhaar, PAN & Bank Passbook', 'Succession / Legal Heir Certificate (if no nomination exists)']
      }
    ]
  },
  {
    id: 'additional-pf-services',
    number: '03',
    title: '3. Additional PF Services',
    shortTitle: 'Additional PF Services',
    subtitle: 'Portal navigation, documentation audits, online application support, and personalized 1-on-1 PF consultation.',
    bannerImage:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    services: [
      {
        id: 'epfo-portal-assistance',
        title: 'EPFO Portal Assistance',
        group: 'Portal & Application',
        iconName: 'Compass',
        desc: 'Guided assistance for navigating the Unified Member Portal, Passbook portal, and online requests.',
        WhatWeDo: [
          'Troubleshooting portal login, OTP, e-Sign, and technical errors',
          'Navigating Unified Member Portal features, service history, and downloads',
          'Helping members understand portal notifications and KYC status flags'
        ],
        docs: ['UAN Number', 'Registered Mobile Number & Aadhaar']
      },
      {
        id: 'pf-claim-documentation',
        title: 'PF Claim Documentation',
        group: 'Portal & Application',
        iconName: 'FolderCheck',
        desc: 'Pre-submission audit and preparation of all forms, declarations, and supporting proofs.',
        WhatWeDo: [
          'Complete verification of your identity, banking, and employment proofs before filing',
          'Preparation of Form 15G, Joint Declarations, and supporting annexures',
          'Ensuring document scan quality and format compliance'
        ],
        docs: ['Aadhaar, PAN & Bank Cheque/Passbook', 'Employment Proofs / PF Statements']
      },
      {
        id: 'pf-account-problem-assistance',
        title: 'PF Account Related Problem Assistance',
        group: 'Diagnostic & Consultation',
        iconName: 'ShieldCheck',
        desc: 'Diagnostic support for complex technical errors, overlapping service periods, or blocked accounts.',
        WhatWeDo: [
          'Deep-dive audit of complex PF accounts (unlinked trusts, closed companies, overlapping DOJ/DOE)',
          'Custom action plan to untangle multi-employer errors blocking withdrawals',
          'Step-by-step resolution roadmap'
        ],
        docs: ['UAN Number & Passbook Statements', 'Any Error Screenshots or Rejection Letters']
      },
      {
        id: 'online-pf-application-assistance',
        title: 'Online PF Application Assistance',
        group: 'Portal & Application',
        iconName: 'FileCheck2',
        desc: 'Real-time step-by-step guidance while filling and submitting online PF, KYC, or transfer forms.',
        WhatWeDo: [
          'Live assistance to select the right claim form and advance para',
          'Preventing common form-filling mistakes that cause 30-day delays',
          'Confirmation of claim submission receipt and tracking setup'
        ],
        docs: ['Active UAN & Password', 'Cancelled Cheque Scan (<500 KB)', 'Aadhaar OTP Mobile']
      },
      {
        id: 'pf-related-consultation',
        title: 'PF Related Consultation',
        group: 'Diagnostic & Consultation',
        iconName: 'Headset',
        desc: '1-on-1 expert consultation via Call or WhatsApp to understand the right process for your case.',
        WhatWeDo: [
          'Personalized 1-on-1 call or WhatsApp session with a PF process specialist',
          'Clear answers on tax rules, withdrawal timing, transfer rules, and pension options',
          'Honest, transparent guidance tailored to your exact requirement'
        ],
        docs: ['Your UAN or PF Query Details']
      }
    ]
  }
];

export const ALL_SERVICES_LIST = SERVICE_CATEGORIES.flatMap((cat) =>
  cat.services.map((s) => ({
    ...s,
    categoryTitle: cat.title,
    categoryShortTitle: cat.shortTitle,
    categoryId: cat.id
  }))
);

export const WHY_PFHELPLINE_DATA = [
  {
    title: 'Requirement-Based Assistance',
    description:
      "Every enquiry begins with understanding the customer's specific PF-related requirement.",
    iconName: 'Compass',
    badge: 'Tailored Assessment'
  },
  {
    title: 'Structured Documentation',
    description:
      'Guidance on relevant documents and information needed for applicable procedures.',
    iconName: 'FolderCheck',
    badge: 'Zero Guesswork'
  },
  {
    title: 'Transparent Communication',
    description:
      'Clear information about service requirements, processes and next steps.',
    iconName: 'MessageSquareText',
    badge: 'Clear Expectations'
  },
  {
    title: 'Dedicated Customer Support',
    description:
      'A support-oriented approach throughout the service engagement.',
    iconName: 'Headset',
    badge: 'Guided Every Step'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirement Assessment',
    description:
      'We understand your PF-related concern and identify the type of assistance required.',
    detail: 'Initial consultation to review UAN status, service history, and exact procedural need.'
  },
  {
    step: '02',
    title: 'Documentation Guidance',
    description:
      'We explain the relevant documentation and applicable requirements.',
    detail: 'Custom checklist of identity, employment, and banking proofs verified for accuracy.'
  },
  {
    step: '03',
    title: 'Process Assistance',
    description:
      'We guide you through the appropriate procedure and submission steps.',
    detail: 'Structured step-by-step navigation through online forms, declarations, and submissions.'
  },
  {
    step: '04',
    title: 'Status Communication',
    description:
      'We provide updates regarding the progress of the assistance being provided.',
    detail: 'Proactive tracking updates and clear guidance on next steps until completion.'
  }
];

export const AUDIENCE_DATA = [
  {
    id: 'employees',
    title: 'For Employees & Former Employees',
    subtitle: '18 Employee PF Services',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    description:
      'Support for PF withdrawal, transfer, UAN activation, KYC updates, profile corrections, and rejected claim resolution.',
    link: '/services?cat=employee-pf-services',
    linkText: 'Explore Employee PF Services',
    iconName: 'Users'
  },
  {
    id: 'pension-family',
    title: 'For Pensioners & Family Members',
    subtitle: 'Pension & Death Claims',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    description:
      'Guidance on EPS pension claims, higher pension, family pension, EDLI insurance, and PF settlement after a member’s death.',
    link: '/services?cat=pension-related-services',
    linkText: 'Explore Pension & Death Claims',
    iconName: 'BriefcaseBusiness'
  }
];

export const FAQ_DATA = [
  {
    q: 'What PF and Pension services does PFHelpline provide?',
    a: 'We provide specialized services across 3 core categories: (1) Employee PF Services (Withdrawal, Transfer, UAN Activation, Aadhaar/Bank/PAN KYC, Name/DOB/Father Name/DOJ/DOE Corrections, Claim Rejection & Grievance Support), (2) Pension & Related Services (EPS Pension, Higher Pension, Family Pension, EDLI & Death Claim Settlement), and (3) Additional PF Services (EPFO Portal, Documentation, Online Application & Consultation).'
  },
  {
    q: 'Why do PF withdrawal or transfer claims get rejected?',
    a: 'Most rejections happen due to Name or DOB mismatches between Aadhaar and UAN records, unverified Bank/IFSC details, missing Date of Exit, overlapping service history, or incorrect form selection. Our team diagnoses the exact reason and guides you through the correction and re-application.'
  },
  {
    q: 'Can you help with Family Pension and PF Settlement after a member’s death?',
    a: 'Yes. We provide compassionate, structured documentation and application guidance for nominees and family members claiming PF Death Settlement (Form 20), Monthly Family Pension (Form 10D), and EDLI Insurance benefits (Form 5IF).'
  },
  {
    q: 'Is PFHelpline affiliated with EPFO or the Government of India?',
    a: 'No. PFHelpline is an independent PF assistance service and is not affiliated with or operated by EPFO or the Government of India. All statutory processes and decisions remain subject to applicable EPFO rules and authorities.'
  }
];
