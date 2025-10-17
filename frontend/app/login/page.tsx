import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Ce composant est basé sur l'image de conception "Client Onboarding/Login"
// Il utilise une structure simple sans dépendance de style externe pour le moment.

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Client Onboarding/Login</h1>

        {/* Section Image/Illustration */}
        <div className="flex justify-center bg-yellow-100 p-4 rounded-md">
          {/* Remplacer par l'image réelle plus tard. Utilisation d'un placeholder pour l'instant. */}
          <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-full">
            <span className="text-xs text-gray-600">Illustration</span>
          </div>
        </div>

        {/* Section Description */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">Send money to friends and family</h2>
          <p className="text-sm text-gray-500 mt-1">
            Fast, secure, and reliable money transfers with multiple pickup locations and unique recovery codes.
          </p>
        </div>

        {/* Section Formulaire (Simplifié) */}
        <div className="space-y-4">
          {/* Select Role - Placeholder */}
          <select
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
            defaultValue="Select Role"
          >
            <option disabled>Select Role</option>
            <option>Client</option>
            <option>Agent (Pickup Point)</option>
            <option>Vendor (Organization)</option>
          </select>

          {/* Boutons d'Action */}
          <button
            type="button"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-150"
          >
            Create Account
          </button>
          <button
            type="button"
            className="w-full bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition duration-150"
          >
            Log In
          </button>
        </div>

        {/* Liens de Politique */}
        <p className="text-xs text-center text-gray-400 mt-4">
          By continuing, you agree to our{' '}
          <Link href="/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

