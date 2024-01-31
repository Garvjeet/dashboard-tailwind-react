import { PageHeader } from './Header';
import { StatsPanel } from './StatsPanel';

export const RightPanel = () => {
  return (
    <div className="w-full h-screen bg-white overflow-y-scroll">
      <PageHeader />
      <StatsPanel />
    </div>
  )
}