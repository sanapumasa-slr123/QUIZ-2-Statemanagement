import { create } from 'zustand';
import {
  getServices,
  getTestimonials,
  getTeamMembers,
  submitContactInquiry,
} from '../services/api.js';

export const useAppStore = create((set) => ({
  // Services
  services: [],
  loadingServices: false,
  errorServices: null,
  fetchServices: async () => {
    set({ loadingServices: true, errorServices: null });
    try {
      const response = await getServices();
      const data = response.data.results || response.data;
      set({ services: Array.isArray(data) ? data : [] });
    } catch (error) {
      set({ errorServices: 'Failed to load services' });
      console.error('Error fetching services:', error);
    } finally {
      set({ loadingServices: false });
    }
  },

  // Testimonials
  testimonials: [],
  loadingTestimonials: false,
  errorTestimonials: null,
  fetchTestimonials: async () => {
    set({ loadingTestimonials: true, errorTestimonials: null });
    try {
      const response = await getTestimonials();
      const data = response.data.results || response.data;
      set({ testimonials: Array.isArray(data) ? data : [] });
    } catch (error) {
      set({ errorTestimonials: 'Failed to load testimonials' });
      console.error('Error fetching testimonials:', error);
    } finally {
      set({ loadingTestimonials: false });
    }
  },

  // Team Members
  teamMembers: [],
  loadingTeamMembers: false,
  errorTeamMembers: null,
  fetchTeamMembers: async () => {
    set({ loadingTeamMembers: true, errorTeamMembers: null });
    try {
      const response = await getTeamMembers();
      const data = response.data.results || response.data;
      set({ teamMembers: Array.isArray(data) ? data : [] });
    } catch (error) {
      set({ errorTeamMembers: 'Failed to load team members' });
      console.error('Error fetching team members:', error);
    } finally {
      set({ loadingTeamMembers: false });
    }
  },

  // Contact Form
  contactSubmitted: false,
  contactError: null,
  contactLoading: false,
  submitContact: async (formData) => {
    set({ contactLoading: true, contactError: null });
    try {
      await submitContactInquiry(formData);
      set({ contactSubmitted: true, contactLoading: false });
      // Auto-reset after 4 seconds
      setTimeout(() => {
        set({ contactSubmitted: false });
      }, 4000);
    } catch (error) {
      set({
        contactError: 'Failed to submit message. Please try again.',
        contactLoading: false,
      });
      console.error('Error submitting contact form:', error);
    }
  },
  resetContactStatus: () => {
    set({ contactSubmitted: false, contactError: null });
  },
}));
