import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useState } from 'react';

const useGetCalls = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const client = useStreamVideoClient();

  const { user } = useUser();

  return {};
};

export default useGetCalls;
