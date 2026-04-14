'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationAdvantages = [
  { name: 'BKC', time: '15 minutes' },
  { name: 'Lower Parel', time: '20 minutes' },
  { name: 'Five Gardens', time: '05 minutes' },
  { name: 'Eastern Express Highway', time: '01 minutes' },
  { name: 'Little Angel’s school', time: 'a short walk' },
  { name: 'Shishuvan School & Don Bosco International School', time: '05 minutes' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-gold-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-gold-light)', marginBottom: '10px',
          }}>Bhaudaji Road, Matunga, Mumbai</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-gold)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
          {/* <p style={{ fontFamily: F_SANS, fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Strategically located at Sector 36A, Gurugram — seamlessly connected to Delhi, Airport, and business hubs
          </p> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              background: '#fff', borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              padding: '24px 20px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              {locationAdvantages.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 0',
                  borderBottom: i < locationAdvantages.length - 1 ? '1px solid #f8f8f8' : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{
                      width: '10px', height: '10px', borderRadius: '50%',
                      background: 'var(--color-gold)', opacity: 0.7, flexShrink: 0
                    }} />
                    <span style={{
                      fontSize: '14.5px', color: '#4b5563', fontWeight: '500',
                      fontFamily: F_SANS, letterSpacing: '0.01em'
                    }}>{item.name}</span>
                  </div>
                  <span style={{
                    fontSize: '14.5px', color: 'var(--color-dark)', fontWeight: '800',
                    fontFamily: F_JOST, textAlign: 'right', whiteSpace: 'nowrap'
                  }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-gold)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              {/* Brand top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7543.3807763665245!2d72.858673!3d19.03336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfd94ca23bf5%3A0xb27ddbcf5fe46b81!2sLodha%20Divino%2C%20Matunga!5e0!3m2!1sen!2sin!4v1776148821230!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              {/* <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '420px' }}>
                <Image
                  src="/images/location/locationmap.webp"
                  alt="Lodha Location Map"
                  fill
                  className="object-cover"
                />
              </div> */}
              {/* Map label badge */}
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Bhaudaji Road, Matunga, Mumbai
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
