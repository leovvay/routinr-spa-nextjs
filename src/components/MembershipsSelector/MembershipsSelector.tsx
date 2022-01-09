import React, { useMemo } from 'react';

import { useGetMyMembershipsQuery } from '@store/services/membership/memberships';
import Select, { SelectOption } from '@components/Select';

interface MembershipsSelectorProps {
  onChange(values: SelectOption | null): void;
  value: SelectOption;
}

function MembershipsSelector({
  onChange,
  value,
}: MembershipsSelectorProps): JSX.Element {
  const { data } = useGetMyMembershipsQuery();

  const options = useMemo(() => {
    const membershipOptions =
      data?.map((membership) => ({
        value: Number(membership.id),
        label: membership.title,
      })) || [];

    return [{ value: -1, label: 'All memberships' }].concat(membershipOptions);
  }, [data]);

  return <Select<false> options={options} onChange={onChange} value={value} />;
}

export default MembershipsSelector;
