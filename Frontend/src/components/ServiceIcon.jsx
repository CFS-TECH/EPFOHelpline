import React from 'react';
import {
  Wallet,
  ArrowLeftRight,
  ShieldCheck,
  FileCheck2,
  UserCheck,
  Building2,
  Compass,
  FolderCheck,
  MessageSquareText,
  Headset,
  Users,
  BriefcaseBusiness,
  Building
} from 'lucide-react';

const ICON_MAP = {
  Wallet,
  ArrowLeftRight,
  ShieldCheck,
  FileCheck2,
  UserCheck,
  Building2,
  Compass,
  FolderCheck,
  MessageSquareText,
  Headset,
  Users,
  BriefcaseBusiness,
  Building
};

export default function ServiceIcon({ name, className = 'w-6 h-6' }) {
  const IconComponent = ICON_MAP[name] || ShieldCheck;
  return <IconComponent className={className} />;
}
