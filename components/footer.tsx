import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="w-40">
              <img src="/pas-logo.png" alt="" />
            </div>
            <p className="text-gray-400">
              Empowering businesses through strategic people management and
              workforce optimization.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1AhDGx17Vs/?mibextid=wwXIfr"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/peopleapexsolution?igsh=NXNxZXdrOXNqdGxn&utm_source=qr"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href=" https://www.linkedin.com/company/people-apex-solution/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li> */}
              <li className="hidden">
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">
                  info@peopleapexsolution.org
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">08134677442</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">
                  1135, Royal Pine Estate, Orchid, Road, Lekki, Lagos, Nigeria.
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 hidden">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-primary hover:bg-[#5a0b8d] w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} People Apex Solution. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
