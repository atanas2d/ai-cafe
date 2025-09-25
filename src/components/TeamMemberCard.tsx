import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps): JSX.Element => (
  <Card className="h-full" title={member.name} subTitle={member.role}>
    <div className="flex flex-column gap-3">
      <img src={member.avatar} alt={`${member.name} avatar`} className="border-round-xl" />
      <p className="m-0 text-sm text-600">{member.description}</p>
      <div className="flex flex-wrap gap-2">
        {member.specialties.map(specialty => (
          <Chip key={specialty} label={specialty} />
        ))}
      </div>
    </div>
  </Card>
);
