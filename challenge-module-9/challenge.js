import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const [time, setTime] = useState(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Total Revenue', value: '$2.4M', change: '+12.5%', color: '#10b981' },
    { label: 'Active Users', value: '48.2K', change: '+8.2%', color: '#3b82f6' },
    { label: 'Growth Rate', value: '23.1%', change: '+2.4%', color: '#8b5cf6' },
    { label: 'Conversion', value: '3.2%', change: '+0.8%', color: '#f59e0b' },
  ];

  const recentActivity = [
    { user: 'Sarah Chen', action: 'Completed deployment', time: '2 min ago' },
    { user: 'Mike Johnson', action: 'Updated API documentation', time: '15 min ago' },
    { user: 'Emma Davis', action: 'Fixed critical bug', time: '1 hour ago' },
    { user: 'James Wilson', action: 'Added new feature', time: '2 hours ago' },
  ];

  const navItems = [
    { label: 'Dashboard', active: true },
    { label: 'Team' },
    { label: 'Projects' },
    { label: 'Analytics' },
    { label: 'Settings' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navLeft}>
          <TouchableOpacity onPress={() => setSidebarOpen(!sidebarOpen)} style={styles.menuBtn}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>Dashboard</Text>
        </View>

        <View style={styles.navRight}>
          <Text style={styles.dateTime}>
            {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            {' • '}
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </Text>

          <TouchableOpacity 
            style={styles.userSection}
            onPress={() => setDropdownOpen(!dropdownOpen)}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>KS</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Kris Sipri</Text>
              <Text style={styles.userRole}>Admin</Text>
            </View>
            <Text style={styles.chevron}>▼</Text>
          </TouchableOpacity>

          {dropdownOpen && (
            <View style={styles.dropdown}>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Settings</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={[styles.dropdownText, { color: '#ef4444' }]}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.main}>
        {sidebarOpen && (
          <View style={styles.sidebar}>
            <Text style={styles.sidebarTitle}>NAVIGATION</Text>
            {navItems.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.navItem, item.active && styles.navItemActive]}
              >
                <Text style={[styles.navLabel, item.active && styles.navLabelActive]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.welcome}>Welcome back, Kris</Text>
          <Text style={styles.subtitle}>Here's what's happening with your company today</Text>

          <View style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <View key={idx} style={styles.statCard}>
                <View style={styles.statHeader}>
                  <View style={[styles.iconCircle, { backgroundColor: stat.color + '20' }]}>
                    <View style={[styles.iconDot, { backgroundColor: stat.color }]} />
                  </View>
                  <Text style={[styles.statChange, { color: stat.color }]}>{stat.change}</Text>
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityCard}>
              {recentActivity.map((activity, idx) => (
                <View key={idx} style={[styles.activityItem, idx === recentActivity.length - 1 && styles.activityItemLast]}>
                  <View style={styles.activityAvatar}>
                    <Text style={styles.activityAvatarText}>
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </Text>
                  </View>
                  <View style={styles.activityContent}>
                    <Text style={styles.activityUser}>{activity.user}</Text>
                    <Text style={styles.activityAction}>{activity.action}</Text>
                  </View>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Team Overview</Text>
            <View style={styles.teamGrid}>
              <View style={styles.teamCard}>
                <Text style={styles.teamNumber}>24</Text>
                <Text style={styles.teamLabel}>Developers</Text>
              </View>
              <View style={styles.teamCard}>
                <Text style={styles.teamNumber}>8</Text>
                <Text style={styles.teamLabel}>Designers</Text>
              </View>
              <View style={styles.teamCard}>
                <Text style={styles.teamNumber}>12</Text>
                <Text style={styles.teamLabel}>Product</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: width < 768 ? 12 : 20,
    paddingVertical: width < 768 ? 12 : 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width < 768 ? 12 : 16,
  },
  menuBtn: {
    padding: 4,
  },
  menuIcon: {
    fontSize: 24,
    color: '#6b7280',
  },
  logo: {
    fontSize: width < 768 ? 18 : 20,
    fontWeight: '700',
    color: '#111827',
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width < 768 ? 8 : 16,
    position: 'relative',
  },
  dateTime: {
    fontSize: width < 768 ? 12 : 14,
    color: '#6b7280',
    display: width < 768 ? 'none' : 'flex',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#f9fafb',
  },
  avatar: {
    width: width < 768 ? 32 : 36,
    height: width < 768 ? 32 : 36,
    borderRadius: width < 768 ? 16 : 18,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: width < 768 ? 12 : 14,
    fontWeight: '600',
  },
  userInfo: {
    gap: 2,
    display: width < 768 ? 'none' : 'flex',
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  userRole: {
    fontSize: 12,
    color: '#6b7280',
  },
  chevron: {
    fontSize: 10,
    color: '#6b7280',
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 8,
    minWidth: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  dropdownText: {
    fontSize: 14,
    color: '#374151',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 4,
  },
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: width < 768 ? 180 : 240,
    backgroundColor: '#ffffff',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
    paddingVertical: width < 768 ? 16 : 20,
    paddingHorizontal: width < 768 ? 12 : 16,
  },
  sidebarTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 4,
  },
  navItemActive: {
    backgroundColor: '#eff6ff',
  },
  navLabel: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#3b82f6',
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: width < 768 ? 16 : 24,
  },
  welcome: {
    fontSize: width < 768 ? 24 : 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: width < 768 ? 14 : 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: width < 768 ? 1 : 0,
    minWidth: width < 768 ? '45%' : 200,
    backgroundColor: '#ffffff',
    padding: width < 768 ? 16 : 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  statChange: {
    fontSize: 14,
    fontWeight: '600',
  },
  statValue: {
    fontSize: width < 768 ? 28 : 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  activityCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  activityItemLast: {
    borderBottomWidth: 0,
  },
  activityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityAvatarText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3b82f6',
  },
  activityContent: {
    flex: 1,
  },
  activityUser: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  activityAction: {
    fontSize: 14,
    color: '#6b7280',
  },
  activityTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  teamGrid: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  teamCard: {
    flex: width < 768 ? 1 : 0,
    minWidth: width < 768 ? '30%' : 150,
    backgroundColor: '#ffffff',
    padding: width < 768 ? 20 : 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  teamNumber: {
    fontSize: width < 768 ? 32 : 36,
    fontWeight: '700',
    color: '#3b82f6',
    marginBottom: 8,
  },
  teamLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
});