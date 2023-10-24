'use client';
import LoginWithButton from './login-with-button';
import { useRouter } from 'next/navigation';

export default function LoginScreen() {
  const router = useRouter();
  return (
    <div className={'fixed w-full h-full'}>
      <div
        className={
          'flex flex-row w-full h-full items-center justify-between mx-20'
        }
      >
        <div className={'w-1/3'}>
          <div className={'bg-white rounded-xl border shadow'}>
            <div className={'w-full flex flex-col p-5'}>
              <h1 className={'text-center text-2xl my-4'}>Войдите с помощью</h1>
              <div className={'flex flex-row flex-nowrap gap-1 px-10'}>
                <LoginWithButton
                  src={'/icons/google.svg'}
                  alt={'Google'}
                  action={() => router.push('/auth/oauth/google-auth', {})}
                />
              </div>
              <div className="inline-flex items-center justify-center w-full mt-10 mb-4">
                <hr className="w-full h-px my-4 mx-10 bg-gray-400 border-0" />
                <span className="absolute px-2 text-gray-900 bg-white">
                  или
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
