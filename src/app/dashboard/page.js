"use client";

import React from 'react';
import { Mail, FileText, Send, Archive, Users, Calendar, TrendingUp, Clock } from 'lucide-react';
import { signOut } from "next-auth/react";

const Dashboard = () => {
  // Data dummy untuk demo
  const stats = {
    totalSurat: 1247,
    suratMasuk: 89,
    suratKeluar: 156,
    suratArsip: 1002
  };

  const recentMail = [
    { id: 1, subject: "Surat Permohonan Izin Kegiatan", sender: "Dinas Pendidikan", date: "2024-07-16", status: "pending" },
    { id: 2, subject: "Laporan Kegiatan Bulan Juni", sender: "Bagian Umum", date: "2024-07-16", status: "approved" },
    { id: 3, subject: "Undangan Rapat Koordinasi", sender: "Sekretariat", date: "2024-07-15", status: "pending" },
    { id: 4, subject: "Surat Tugas Dinas Luar Kota", sender: "Kepegawaian", date: "2024-07-15", status: "sent" }
  ];

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <Icon className="h-8 w-8" style={{ color }} />
      </div>
    </div>
  );

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' },
      approved: { bg: 'bg-green-100', text: 'text-green-800', label: 'Disetujui' },
      sent: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Terkirim' },
      rejected: { bg: 'bg-red-100', text: 'text-red-800', label: 'Ditolak' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Sistem Manajemen Surat Otomatis</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                <Clock className="inline h-4 w-4 mr-1" />
                {new Date().toLocaleDateString('id-ID', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <button 
                onClick={() => signOut({ callbackUrl: '/' })} 
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >Keluar Anjay</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Surat" 
            value={stats.totalSurat} 
            icon={FileText} 
            color="#3B82F6" 
          />
          <StatCard 
            title="Surat Masuk" 
            value={stats.suratMasuk} 
            icon={Mail} 
            color="#10B981" 
          />
          <StatCard 
            title="Surat Keluar" 
            value={stats.suratKeluar} 
            icon={Send} 
            color="#F59E0B" 
          />
          <StatCard 
            title="Surat Arsip" 
            value={stats.suratArsip} 
            icon={Archive} 
            color="#6B7280" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Mail Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Surat Terbaru</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subjek
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pengirim
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tanggal
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentMail.map((mail) => (
                      <tr key={mail.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{mail.subject}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{mail.sender}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(mail.date).toLocaleDateString('id-ID')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(mail.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Aksi Cepat</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Mail className="h-4 w-4 mr-2" />
                  Buat Surat Baru
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <FileText className="h-4 w-4 mr-2" />
                  Lihat Semua Surat
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Archive className="h-4 w-4 mr-2" />
                  Kelola Arsip
                </button>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ringkasan Aktivitas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Surat Hari Ini</span>
                  <span className="text-sm font-medium text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Menunggu Approval</span>
                  <span className="text-sm font-medium text-yellow-600">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Surat Tertunda</span>
                  <span className="text-sm font-medium text-red-600">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rata-rata Proses</span>
                  <span className="text-sm font-medium text-green-600">2.5 hari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;