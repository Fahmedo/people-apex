import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  bio: string;
  linkdInLink?: string;
  twitterXLink?: string;
  mailLink?: string;
}

export function TeamMember({
  image,
  name,
  position,
  bio,
  linkdInLink,
  twitterXLink,
  mailLink,
}: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
        <div className="aspect-square relative">
          <Image
            src={image || '/placeholder.svg'}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-center space-x-3 mb-2">
                <a
                  href={linkdInLink}
                  className="bg-white rounded-full p-2 text-primary hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={twitterXLink}
                  className="bg-white rounded-full p-2 text-primary hover:bg-gray-100 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={mailLink}
                  className="bg-white rounded-full p-2 text-primary hover:bg-gray-100 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-primary font-medium">{position}</p>
        <p className="mt-2 text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
}
