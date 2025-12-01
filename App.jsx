import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Users, DollarSign, Home, Sparkles, Target, Calendar } from 'lucide-react';

const SalesDashboard = () => {
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [animatedUnits, setAnimatedUnits] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  // Animate counters on load
  useEffect(() => {
    const revenueTarget = 10500000;
    const unitsTarget = 120;
    const duration = 2000;
    const steps = 60;
    const revenueStep = revenueTarget / steps;
    const unitsStep = unitsTarget / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setAnimatedRevenue(Math.min(Math.floor(revenueStep * currentStep), revenueTarget));
      setAnimatedUnits(Math.min(Math.floor(unitsStep * currentStep), unitsTarget));
      
      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Monthly sales data
  const monthlySalesData = [
    { month: 'Jan', units: 8, revenue: 700000 },
    { month: 'Feb', units: 9, revenue: 790000 },
    { month: 'Mar', units: 12, revenue: 1050000 },
    { month: 'Apr', units: 10, revenue: 875000 },
    { month: 'May', units: 14, revenue: 1225000 },
    { month: 'Jun', units: 11, revenue: 965000 },
    { month: 'Jul', units: 9, revenue: 790000 },
    { month: 'Aug', units: 13, revenue: 1140000 },
    { month: 'Sep', units: 10, revenue: 875000 },
    { month: 'Oct', units: 11, revenue: 965000 },
    { month: 'Nov', units: 7, revenue: 615000 },
    { month: 'Dec', units: 6, revenue: 525000 }
  ];

  // Property breakdown data
  const propertyData = [
    { name: 'Spektra House', units: 102, value: 8925000, color: '#D4AF37', percentage: 72 },
    { name: 'Kemuyang Ave Phase 5', units: 18, value: 1575000, color: '#DAA520', percentage: 56 }
  ];

  // Quarterly performance
  const quarterlyData = [
    { quarter: 'Q1', revenue: 2540000, units: 29, avgPrice: 87586 },
    { quarter: 'Q2', revenue: 3065000, units: 35, avgPrice: 87571 },
    { quarter: 'Q3', revenue: 2805000, units: 32, avgPrice: 87656 },
    { quarter: 'Q4', revenue: 2105000, units: 24, avgPrice: 87708 }
  ];

  // Key achievements
  const achievements = [
    { icon: Home, title: '72% of SPEKTRA HOUSE Sold', desc: '102 units from single development - Flagship project leader', color: 'from-amber-400 to-yellow-600' },
    { icon: Award, title: "Company's Top Sales Executive 2024", desc: 'Highest unit sales volume across all developments', color: 'from-yellow-400 to-amber-600' },
    { icon: DollarSign, title: 'RM10M+ Revenue Generated', desc: 'Leading revenue contributor in 12-month period', color: 'from-amber-500 to-yellow-700' },
    { icon: Target, title: '120+ Units Sold in 12 Months', desc: 'Exceptional performance across 2 major developments', color: 'from-yellow-500 to-amber-700' }
  ];

  const StatCard = ({ icon: Icon, label, value, subtext, gradient }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
      <div className="relative bg-white backdrop-blur-xl border border-amber-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-md">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="text-slate-600 text-sm mb-1 font-medium">{label}</div>
        <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
          {value}
        </div>
        {subtext && <div className="text-amber-600/70 text-xs font-medium">{subtext}</div>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-slate-900 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <header className="relative border-b border-amber-200 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  ASYIQIN Sales Analytics
                </h1>
                <p className="text-slate-600 text-sm">Senior Sales & Marketing Executive | WHE Contract Sdn Bhd</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg font-semibold text-white hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-amber-500/30">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Hero Stats */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
              12-Month Performance Snapshot
            </h2>
            <p className="text-slate-600 text-lg">January 2024 - December 2024</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={DollarSign}
              label="Total Revenue Generated"
              value={`RM ${(animatedRevenue / 1000000).toFixed(1)}M`}
              subtext="10.5M Target Achieved"
              gradient="from-amber-400 to-yellow-600"
            />
            <StatCard
              icon={Home}
              label="Units Sold"
              value={`${animatedUnits}+`}
              subtext="Across 2 Major Developments"
              gradient="from-yellow-400 to-amber-600"
            />
            <StatCard
              icon={TrendingUp}
              label="Average Deal Value"
              value="RM 87.5K"
              subtext="Premium Segment Focus"
              gradient="from-amber-500 to-yellow-700"
            />
            <StatCard
              icon={Calendar}
              label="Average Closure"
              value="18 Days"
              subtext="Industry Avg: 45 days"
              gradient="from-yellow-500 to-amber-700"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 bg-white backdrop-blur-xl p-2 rounded-xl border border-amber-200 shadow-md">
          {['overview', 'properties', 'achievements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-500/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Monthly Sales Chart */}
            <div className="bg-white backdrop-blur-xl border border-amber-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <TrendingUp className="w-6 h-6 text-amber-500" />
                Monthly Sales Performance
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlySalesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis yAxisId="left" stroke="#64748b" />
                  <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #fbbf24',
                      borderRadius: '8px',
                      color: '#1e293b',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="units"
                    stroke="#D4AF37"
                    strokeWidth={3}
                    name="Units Sold"
                    dot={{ fill: '#D4AF37', r: 4 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#DAA520"
                    strokeWidth={3}
                    name="Revenue (RM)"
                    dot={{ fill: '#DAA520', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Quarterly Performance */}
            <div className="bg-white backdrop-blur-xl border border-amber-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <BarChart className="w-6 h-6 text-amber-500" />
                Quarterly Revenue Breakdown
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={quarterlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="quarter" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #fbbf24',
                      borderRadius: '8px',
                      color: '#1e293b',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="revenue" fill="url(#colorRevenue)" name="Revenue (RM)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity={1} />
                      <stop offset="100%" stopColor="#B8860B" stopOpacity={0.8} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Property Distribution Chart */}
              <div className="bg-white backdrop-blur-xl border border-amber-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                  <Home className="w-6 h-6 text-amber-500" />
                  Units by Development
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={propertyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="units"
                      style={{ fontSize: '12px', fontWeight: '600', fill: '#78350f' }}
                    >
                      {propertyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #fbbf24',
                        borderRadius: '8px',
                        color: '#1e293b',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Property Details */}
              <div className="bg-white backdrop-blur-xl border border-amber-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                  <DollarSign className="w-6 h-6 text-amber-500" />
                  Development Performance
                </h3>
                <div className="space-y-4">
                  {propertyData.map((property, index) => (
                    <div key={index} className="bg-amber-50 rounded-xl p-4 border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-amber-700">{property.name}</h4>
                        <span className="text-amber-600 text-sm font-bold">{property.percentage}% Sold</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-slate-800">
                          {property.units} units
                        </span>
                        <span className="text-slate-600 text-sm">RM {(property.value / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="mt-2 bg-amber-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full transition-all duration-1000"
                          style={{ width: `${(property.units / 120) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500" />
                  <div className="relative bg-white backdrop-blur-xl border border-amber-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-xl transition-all duration-300 shadow-md">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-amber-700">{achievement.title}</h3>
                    <p className="text-slate-600">{achievement.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Showcase */}
            <div className="bg-white backdrop-blur-xl border border-amber-200 rounded-2xl p-8 mt-8 shadow-lg">
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Unique Value Proposition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-amber-600 flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Sales Excellence
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>120+ residential units sold in 12 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>RM10M+ revenue generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>72% of SPEKTRA HOUSE sold (102 units)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Premium property segment specialist</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-amber-600 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Technical Innovation
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Self-taught web development (HTML, CSS, JavaScript)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Built luxury property showcase website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Developed functional CRM system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Created THIS interactive analytics dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-amber-200 bg-white/80 backdrop-blur-xl mt-12 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-600">
            Created by <span className="text-amber-600 font-semibold">ASYIQIN</span> | 
            Showcasing Sales Excellence + Technical Innovation
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Technologies: React, Recharts, Tailwind CSS | Built from scratch to demonstrate technical capabilities
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SalesDashboard;