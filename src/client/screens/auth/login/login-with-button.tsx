'use client';
import Image from 'next/image';

type LoginWithButtonProps = { src: string; alt: string; action: () => void };

export default function LoginWithButton({
  src,
  alt,
  action,
}: LoginWithButtonProps) {
  return (
    <button
      className={
        'w-10 h-10 flex flex-nowrap justify-center items-center border border-gray-300 rounded hover:bg-gray-200'
      }
      onClick={action}
    >
      <div className={'w-6 h-6'}>
        <Image width={48} height={48} src={src} alt={alt} />
      </div>
    </button>
  );
}
