import { memo } from 'react';
import { motion } from 'motion/react';
import { LiquidCard, StatIconWrap, StatValue, StatLabel } from './StatCard.style';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const springConfig = { type: 'spring', stiffness: 380, damping: 22 } as const;
const tapConfig   = { type: 'spring', stiffness: 500, damping: 30 } as const;

const StatCardComponent: React.FC<StatCardProps> = ({ label, value, icon }) => (
  <motion.div
    whileHover={{ y: -9, scale: 1.025, transition: springConfig }}
    whileTap={{ scale: 0.975, transition: tapConfig }}
    style={{ borderRadius: 28, display: 'flex', justifyContent: 'center' }}
  >
    <LiquidCard>
      <StatIconWrap>{icon}</StatIconWrap>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </LiquidCard>
  </motion.div>
);

export const StatCard = memo(StatCardComponent);
