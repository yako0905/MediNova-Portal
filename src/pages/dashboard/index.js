import React from 'react';
import { PageHero, Section, Card, Badge, SectionHeading } from '../../components/commons';
import { FeatureGrid } from '../../components/Features';
import { IconCalendar, IconClock, IconFileText } from '../../components/commons/icons';

import { upcomingAppointments, medicalHistory, quickActions } from '../../data/dashboard';
import './dashboard.css';

const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const statusTone = { confirmed: 'success', pending: 'accent' };

/**
 * Dashboard
 *
 * Phase 4 rebuild: a patient-facing overview built from mock data in
 * src/data/dashboard.js (swap for a real "my account" API response
 * later — the shape is already what the page expects). Quick actions
 * reuse FeatureGrid/FeatureCard's link support so each card is a
 * single clickable target instead of a separate button.
 */
const Dashboard = () => {
  return (
    <div>
      <PageHero
        eyebrow="Dashboard"
        title="Welcome Back"
        subtitle="Here's an overview of your upcoming care and recent medical history."
      />

      <Section>
        <FeatureGrid items={quickActions} eyebrow="Quick Actions" title="What Would You Like To Do?" columns={4} />
      </Section>

      <Section tone="surface">
        <div className="dashboard-grid">
          <div className="dashboard-grid__main">
            <SectionHeading
              align="left"
              eyebrow="Your Schedule"
              title="Upcoming Appointments"
            />

            {upcomingAppointments.length === 0 ? (
              <Card className="dashboard-empty">
                <p>You have no upcoming appointments.</p>
              </Card>
            ) : (
              <div className="dashboard-list">
                {upcomingAppointments.map((apt) => (
                  <Card key={apt.id} className="appointment-item">
                    <div className="appointment-item__icon">
                      <IconCalendar aria-hidden="true" />
                    </div>
                    <div className="appointment-item__body">
                      <h3 className="appointment-item__doctor">{apt.doctor}</h3>
                      <p className="appointment-item__department">{apt.department}</p>
                      <p className="appointment-item__datetime">
                        <IconClock aria-hidden="true" /> {formatDate(apt.date)} · {apt.time}
                      </p>
                    </div>
                    <Badge tone={statusTone[apt.status] || 'neutral'}>
                      {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                    </Badge>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="dashboard-grid__sidebar">
            <SectionHeading
              align="left"
              eyebrow="Your Records"
              title="Medical History"
            />

            <div className="dashboard-list">
              {medicalHistory.map((record) => (
                <Card key={record.id} className="history-item">
                  <div className="history-item__icon">
                    <IconFileText aria-hidden="true" />
                  </div>
                  <div className="history-item__body">
                    <h3 className="history-item__title">{record.title}</h3>
                    <p className="history-item__meta">
                      {record.doctor} · {formatDate(record.date)}
                    </p>
                    <p className="history-item__summary">{record.summary}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Dashboard;