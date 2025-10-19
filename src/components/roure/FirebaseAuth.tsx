import React, { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const FirebaseAuth: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error('Login error', e);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error('Logout error', e);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <button onClick={login} className="px-4 py-2 rounded bg-amber-400 text-black">Entrar con Google</button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {user.photoURL && <img src={user.photoURL} alt={user.displayName ?? 'avatar'} className="w-8 h-8 rounded-full" />}
      <div className="text-sm">
        <div className="font-medium">{user.displayName}</div>
        <div className="text-xs opacity-80">{user.email}</div>
      </div>
      <button onClick={logout} className="px-3 py-1 rounded bg-stone-100 text-black">Salir</button>
    </div>
  );
};

export default FirebaseAuth;
