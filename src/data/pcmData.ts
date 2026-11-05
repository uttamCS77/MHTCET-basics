import { ChapterData, SubjectType } from '../types';

export const PCM_ANALYSIS_DATA: Record<SubjectType, ChapterData[]> = {
  Physics: [
    // --- CLASS 12 CHAPTERS (80% Weightage) ---
    {
      chapter: 'Rotational Dynamics',
      classLevel: 'Class 12',
      totalQuestions: 207,
      topics: [
        {
          name: 'Moment of Inertia & Parallel/Perpendicular Axes',
          subtopic: 'Radius of gyration, MI of ring, disc, solid cylinder, sphere, parallel & perpendicular axes theorems',
          c22: 21, c23: 24, c24: 27, c25: 9, c26: 'N/A',
          total: 81, avgPerPaper: 2.03, paperCoverage: 92.5, subjectWeightage: 4.05,
          priority: 'Very High', uniqueQuestions: 74, totalOccurrences: 81,
          rationale: 'Core staple appearing in almost every shift; direct formula and axis shift calculations.'
        },
        {
          name: 'Banking of Roads & Conical Pendulum',
          subtopic: 'Maximum speed without slipping, angle of banking with friction, conical pendulum time period',
          c22: 11, c23: 12, c24: 13, c25: 4, c26: 'N/A',
          total: 40, avgPerPaper: 1.00, paperCoverage: 65.0, subjectWeightage: 2.00,
          priority: 'High', uniqueQuestions: 37, totalOccurrences: 40,
          rationale: 'Consistently asked across shifts for curved roads with friction and tension relations.'
        },
        {
          name: 'Vertical Circular Motion & Critical Velocities',
          subtopic: 'Tension difference (T_bottom - T_top = 6mg), minimum velocities at top, bottom and horizontal',
          c22: 9, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 33, avgPerPaper: 0.83, paperCoverage: 60.0, subjectWeightage: 1.65,
          priority: 'High', uniqueQuestions: 31, totalOccurrences: 33,
          rationale: 'Frequent numerical on string vs rod vertical circles and looping the loop.'
        },
        {
          name: 'Conservation of Angular Momentum & Torque Relations',
          subtopic: 'I1*w1 = I2*w2, rotating turntable, diver acrobat, tau = I*alpha relation',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 57.5, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Standard conceptual and numerical problems on change in moment of inertia and angular speed.'
        },
        {
          name: 'Rolling Motion Without Slipping & Total Kinetic Energy',
          subtopic: 'Total KE = translational + rotational, acceleration down an inclined plane a = g sin(theta)/(1 + k^2/r^2)',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 45.0, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Comparison of velocities of ring, disc, sphere reaching bottom of an incline.'
        }
      ]
    },
    {
      chapter: 'Mechanical Properties of Fluids',
      classLevel: 'Class 12',
      totalQuestions: 124,
      topics: [
        {
          name: 'Surface Tension, Excess Pressure & Capillary Rise',
          subtopic: 'Excess pressure inside bubble/drop (2T/R, 4T/R), Jurin law h = 2T cos(theta)/(r*rho*g), work done in blowing',
          c22: 12, c23: 14, c24: 15, c25: 5, c26: 'N/A',
          total: 46, avgPerPaper: 1.15, paperCoverage: 72.5, subjectWeightage: 2.30,
          priority: 'High', uniqueQuestions: 42, totalOccurrences: 46,
          rationale: 'Primary fluid mechanics focus in MHT CET; bubble combination and work done splitting droplets.'
        },
        {
          name: 'Stokes’ Law, Terminal Velocity & Viscous Drag',
          subtopic: 'F = 6*pi*eta*r*v, terminal velocity v_t = 2*r^2*(rho - sigma)*g/(9*eta)',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 55.0, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Direct ratio questions on raindrops falling through air and oil drop terminal velocity.'
        },
        {
          name: 'Bernoulli’s Principle & Equation of Continuity',
          subtopic: 'A1*v1 = A2*v2, P + 1/2*rho*v^2 + rho*g*h = const, Torricelli speed of efflux',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Venturimeter and pressure differential calculations across narrowing pipe sections.'
        },
        {
          name: 'Hydrostatic Pressure & Pascal’s Law',
          subtopic: 'P = P0 + rho*g*h, hydraulic lift mechanical advantage F1/A1 = F2/A2',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Straightforward pressure calculation at depth and U-tube manometer liquid heights.'
        }
      ]
    },
    {
      chapter: 'Kinetic Theory of Gases and Radiation',
      classLevel: 'Class 12',
      totalQuestions: 117,
      topics: [
        {
          name: 'RMS Velocity, Mean Free Path & Molar Heat Capacities',
          subtopic: 'v_rms = sqrt(3RT/M), mean free path lambda = 1/(sqrt(2)*pi*d^2*n), Cp - Cv = R/J, gamma ratios',
          c22: 11, c23: 13, c24: 14, c25: 4, c26: 'N/A',
          total: 42, avgPerPaper: 1.05, paperCoverage: 67.5, subjectWeightage: 2.10,
          priority: 'High', uniqueQuestions: 38, totalOccurrences: 42,
          rationale: 'Fundamental kinetic gas laws, degree of freedom and gamma calculations for gas mixtures.'
        },
        {
          name: 'Stefan-Boltzmann Law, Emissive Power & Kirchhoff Law',
          subtopic: 'E = sigma*T^4, net radiant power E_net = sigma*A*(T^4 - T0^4), emissive and absorptive power',
          c22: 8, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 32, avgPerPaper: 0.80, paperCoverage: 57.5, subjectWeightage: 1.60,
          priority: 'High', uniqueQuestions: 30, totalOccurrences: 32,
          rationale: 'Radiative cooling power and ratio of heat loss under differing temperature environments.'
        },
        {
          name: 'Wien’s Displacement Law & Blackbody Radiation Curves',
          subtopic: 'lambda_max * T = b (Wien constant), peak spectral energy shift with absolute temperature',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Comparison of surface temperatures of stars based on observed maximum emission wavelengths.'
        },
        {
          name: 'Ideal Gas Pressure Derivation & Internal Energy',
          subtopic: 'P = 1/3 * rho * v_rms^2, total internal energy U = n*Cv*T, kinetic energy per molecule = 3/2 * k_B * T',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Foundational microscopic interpretation of pressure and average kinetic energy.'
        }
      ]
    },
    {
      chapter: 'Thermodynamics',
      classLevel: 'Class 12',
      totalQuestions: 118,
      topics: [
        {
          name: 'First Law of Thermodynamics, P-V Work & Cyclic Work',
          subtopic: 'dQ = dU + dW, work done = area under P-V curve, cyclic clockwise/anticlockwise work',
          c22: 14, c23: 16, c24: 18, c25: 5, c26: 'N/A',
          total: 53, avgPerPaper: 1.33, paperCoverage: 77.5, subjectWeightage: 2.65,
          priority: 'Very High', uniqueQuestions: 48, totalOccurrences: 53,
          rationale: 'Highest recurring topic in thermodynamics; graphical indicator loops and sign conventions.'
        },
        {
          name: 'Carnot Engine Efficiency & Refrigerator COP',
          subtopic: 'eta = 1 - T2/T1 = W/Q1, coefficient of performance beta = T2/(T1 - T2) = Q2/W',
          c22: 9, c23: 11, c24: 12, c25: 3, c26: 'N/A',
          total: 35, avgPerPaper: 0.88, paperCoverage: 62.5, subjectWeightage: 1.75,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 35,
          rationale: 'Standard formula applications comparing source/sink temperatures in Kelvin.'
        },
        {
          name: 'Isothermal, Adiabatic, Isochoric & Isobaric Processes',
          subtopic: 'W_iso = nRT ln(V2/V1), W_adia = (P1V1 - P2V2)/(gamma - 1), TV^(gamma-1) = const',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Work and temperature changes across specific thermodynamic process transitions.'
        }
      ]
    },
    {
      chapter: 'Oscillations',
      classLevel: 'Class 12',
      totalQuestions: 135,
      topics: [
        {
          name: 'Linear SHM Differential Equation, Velocity & Acceleration',
          subtopic: 'd^2x/dt^2 + omega^2*x = 0, v = omega*sqrt(A^2 - x^2), a = -omega^2*x, phase constants',
          c22: 15, c23: 17, c24: 18, c25: 6, c26: 'N/A',
          total: 56, avgPerPaper: 1.40, paperCoverage: 80.0, subjectWeightage: 2.80,
          priority: 'Very High', uniqueQuestions: 50, totalOccurrences: 56,
          rationale: 'High weightage kinematics of harmonic motion; speed at mid-points and acceleration ratios.'
        },
        {
          name: 'Simple Pendulum & Angular SHM Period Formula',
          subtopic: 'T = 2*pi*sqrt(L/g), seconds pendulum, period in accelerating elevator, spring mass T = 2*pi*sqrt(m/k)',
          c22: 9, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 33, avgPerPaper: 0.83, paperCoverage: 60.0, subjectWeightage: 1.65,
          priority: 'High', uniqueQuestions: 31, totalOccurrences: 33,
          rationale: 'Standard length adjustments, percentage change in time period, and gravity variation.'
        },
        {
          name: 'Total Energy, Kinetic Energy & Potential Energy of SHM',
          subtopic: 'KE = 1/2*m*omega^2*(A^2 - x^2), PE = 1/2*m*omega^2*x^2, position where KE = PE (x = A/sqrt(2))',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 57.5, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Fractional energy questions comparing potential energy to total oscillatory energy.'
        },
        {
          name: 'Composition of Two SHMs (Parallel & Perpendicular)',
          subtopic: 'Resultant amplitude R = sqrt(A1^2 + A2^2 + 2*A1*A2*cos(phi)), initial epoch tan(theta)',
          c22: 4, c23: 5, c24: 5, c25: 2, c26: 'N/A',
          total: 16, avgPerPaper: 0.40, paperCoverage: 35.0, subjectWeightage: 0.80,
          priority: 'Moderate', uniqueQuestions: 15, totalOccurrences: 16,
          rationale: 'Interference of collinear harmonic waves having equal frequency and arbitrary phase difference.'
        }
      ]
    },
    {
      chapter: 'Superposition of Waves',
      classLevel: 'Class 12',
      totalQuestions: 119,
      topics: [
        {
          name: 'Stationary Waves in Stretched Strings & Organ Pipes',
          subtopic: 'Fundamental frequency n = 1/(2L)*sqrt(T/m), open pipe harmonics (n:2n:3n), closed pipe (n:3n:5n)',
          c22: 13, c23: 14, c24: 16, c25: 5, c26: 'N/A',
          total: 48, avgPerPaper: 1.20, paperCoverage: 72.5, subjectWeightage: 2.40,
          priority: 'High', uniqueQuestions: 44, totalOccurrences: 48,
          rationale: 'Overtones, harmonics, tension variations in sonometer wire and resonant air columns.'
        },
        {
          name: 'Beats Phenomenon & Frequency Determination',
          subtopic: 'Beat frequency n_b = |n1 - n2|, tuning fork waxing and filing frequency variation',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Identifying unknown frequency when beats change after loading with wax.'
        },
        {
          name: 'End Corrections in Resonance Tube Experiments',
          subtopic: 'e = 0.3*d, v = 2*n*(L2 - L1), effective length L_eff = L + e or L + 2e',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Inner diameter adjustments in acoustic resonance tube laboratory configurations.'
        },
        {
          name: 'Musical Sound Characteristics & Sonometer Laws',
          subtopic: 'Law of length (n*L=const), law of tension (n/sqrt(T)=const), law of linear density',
          c22: 5, c23: 5, c24: 6, c25: 2, c26: 'N/A',
          total: 18, avgPerPaper: 0.45, paperCoverage: 37.5, subjectWeightage: 0.90,
          priority: 'Moderate', uniqueQuestions: 17, totalOccurrences: 18,
          rationale: 'Direct validation of sonometer proportionality laws.'
        }
      ]
    },
    {
      chapter: 'Wave Optics',
      classLevel: 'Class 12',
      totalQuestions: 141,
      topics: [
        {
          name: 'Young’s Double Slit Experiment (YDSE) & Fringe Width',
          subtopic: 'Fringe width beta = lambda*D/d, path difference Delta x = x*d/D, fringe shift due to mica sheet Delta x = (mu-1)*t*D/d',
          c22: 16, c23: 19, c24: 20, c25: 7, c26: 'N/A',
          total: 62, avgPerPaper: 1.55, paperCoverage: 82.5, subjectWeightage: 3.10,
          priority: 'Very High', uniqueQuestions: 55, totalOccurrences: 62,
          rationale: 'One of the top 5 most frequently tested subtopics across all 5 years in Physics.'
        },
        {
          name: 'Resolving Power of Telescope/Microscope & Brewster Law',
          subtopic: 'RP_telescope = D/(1.22*lambda), RP_microscope = 2*mu*sin(theta)/(1.22*lambda), tan(i_p) = mu',
          c22: 9, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 33, avgPerPaper: 0.83, paperCoverage: 57.5, subjectWeightage: 1.65,
          priority: 'High', uniqueQuestions: 30, totalOccurrences: 33,
          rationale: 'Polarization angle calculations and resolving limit dependencies on wavelength and aperture.'
        },
        {
          name: 'Single Slit Fraunhofer Diffraction Minima & Maxima',
          subtopic: 'Central maximum angular width 2*lambda/a, minima condition a*sin(theta) = n*lambda',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 27, totalOccurrences: 30,
          rationale: 'Distinguishing interference fringes from diffraction envelope central peak width.'
        },
        {
          name: 'Huygens’ Wave Theory & Refraction Proof',
          subtopic: 'Wavefront progression, Snell law derivation sin(i)/sin(r) = v1/v2, wave speed in medium',
          c22: 4, c23: 5, c24: 6, c25: 1, c26: 'N/A',
          total: 16, avgPerPaper: 0.40, paperCoverage: 35.0, subjectWeightage: 0.80,
          priority: 'Moderate', uniqueQuestions: 15, totalOccurrences: 16,
          rationale: 'Geometric wave surface construction and optical path differences.'
        }
      ]
    },
    {
      chapter: 'Electrostatics',
      classLevel: 'Class 12',
      totalQuestions: 161,
      topics: [
        {
          name: 'Parallel Plate Capacitors & Dielectric Slab Insertion',
          subtopic: 'C = k*eps0*A/d, partial dielectric slab C = eps0*A/(d - t + t/k), stored energy U = 1/2*C*V^2 = Q^2/(2C)',
          c22: 18, c23: 20, c24: 22, c25: 7, c26: 'N/A',
          total: 67, avgPerPaper: 1.68, paperCoverage: 85.0, subjectWeightage: 3.35,
          priority: 'Very High', uniqueQuestions: 60, totalOccurrences: 67,
          rationale: 'Rank #3 in Physics; battery connected vs disconnected dielectric insertion is tested nearly every paper.'
        },
        {
          name: 'Gauss’s Law Applications',
          subtopic: 'Electric field due to infinitely long charged wire (E = lambda/(2*pi*eps0*r)), charged plane sheet (E = sigma/(2*eps0)), sphere',
          c22: 10, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 37, avgPerPaper: 0.93, paperCoverage: 62.5, subjectWeightage: 1.85,
          priority: 'High', uniqueQuestions: 34, totalOccurrences: 37,
          rationale: 'Symmetric flux integration and radial distance variation of field strength.'
        },
        {
          name: 'Electric Potential & Potential Energy of Dipole Systems',
          subtopic: 'V = 1/(4*pi*eps0) * p*cos(theta)/r^2, torque tau = p x E, work done rotating dipole W = p*E*(cos(theta1) - cos(theta2))',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 55.0, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Dipole orientation in external uniform field and electrostatic potential difference.'
        },
        {
          name: 'Combination of Capacitors (Series, Parallel, Wheatstone)',
          subtopic: 'Charge and voltage distribution, equivalent capacitance of infinite ladder and bridge networks',
          c22: 7, c23: 8, c24: 9, c25: 2, c26: 'N/A',
          total: 26, avgPerPaper: 0.65, paperCoverage: 50.0, subjectWeightage: 1.30,
          priority: 'Moderate', uniqueQuestions: 24, totalOccurrences: 26,
          rationale: 'Network reduction and energy redistribution when two charged capacitors are joined.'
        }
      ]
    },
    {
      chapter: 'Current Electricity',
      classLevel: 'Class 12',
      totalQuestions: 180,
      topics: [
        {
          name: 'Kirchhoff’s Laws, Junction & Loop Rule Circuits',
          subtopic: 'Sum of currents at junction = 0, sum of IR + EMF around closed loop = 0, multiloop network mesh analysis',
          c22: 19, c23: 22, c24: 23, c25: 8, c26: 'N/A',
          total: 72, avgPerPaper: 1.80, paperCoverage: 87.5, subjectWeightage: 3.60,
          priority: 'Very High', uniqueQuestions: 65, totalOccurrences: 72,
          rationale: 'Rank #2 in Physics; indispensable for solving complex DC electrical networks.'
        },
        {
          name: 'Potentiometer & Comparison of Cell EMFs',
          subtopic: 'Potential gradient k = V/L, comparison of EMFs E1/E2 = L1/L2, sum & difference (E1+E2)/(E1-E2) = (L1+L2)/(L1-L2), internal resistance r = R(L1/L2 - 1)',
          c22: 14, c23: 16, c24: 17, c25: 5, c26: 'N/A',
          total: 52, avgPerPaper: 1.30, paperCoverage: 77.5, subjectWeightage: 2.60,
          priority: 'Very High', uniqueQuestions: 47, totalOccurrences: 52,
          rationale: 'High reliability in state board and CET; sensitivity and null point shift calculations.'
        },
        {
          name: 'Wheatstone Bridge & Metre Bridge Unknown Resistance',
          subtopic: 'Balance condition P/Q = R/S, metre bridge X = R*(lx/(100-lx)), end errors elimination',
          c22: 9, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 33, avgPerPaper: 0.83, paperCoverage: 60.0, subjectWeightage: 1.65,
          priority: 'High', uniqueQuestions: 31, totalOccurrences: 33,
          rationale: 'Shunt resistance connected in parallel/series to achieve balance.'
        },
        {
          name: 'Temperature Coefficient of Resistance & Drift Velocity',
          subtopic: 'R_T = R_0*(1 + alpha*Delta T), drift velocity v_d = e*E*tau/m, current density j = n*e*v_d',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 45.0, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Resistance variation of metals vs semiconductors with temperature.'
        }
      ]
    },
    {
      chapter: 'Magnetic Fields due to Electric Current',
      classLevel: 'Class 12',
      totalQuestions: 131,
      topics: [
        {
          name: 'Biot-Savart Law & Circular Coil On-Axis Magnetic Field',
          subtopic: 'B = mu0*I*R^2 / [2*(R^2 + x^2)^(3/2)], field at centre B_centre = mu0*I/(2R), ratio of B_axis to B_centre',
          c22: 12, c23: 13, c24: 15, c25: 5, c26: 'N/A',
          total: 45, avgPerPaper: 1.13, paperCoverage: 70.0, subjectWeightage: 2.25,
          priority: 'High', uniqueQuestions: 41, totalOccurrences: 45,
          rationale: 'Consistently appears on axis distance x = R or x = R*sqrt(3).'
        },
        {
          name: 'Moving Coil Galvanometer: Shunt & Multiplier Conversions',
          subtopic: 'Ammeter conversion S = (Ig*G)/(I - Ig), Voltmeter conversion R_s = (V/Ig) - G',
          c22: 9, c23: 11, c24: 12, c25: 3, c26: 'N/A',
          total: 35, avgPerPaper: 0.88, paperCoverage: 62.5, subjectWeightage: 1.75,
          priority: 'High', uniqueQuestions: 32, totalOccurrences: 35,
          rationale: 'Standard instrument modification problems converting microammeter to multi-range meters.'
        },
        {
          name: 'Lorentz Force, Cyclotron Motion & Helical Path',
          subtopic: 'F = q(E + v x B), radius r = mv/(qB), cyclotron frequency f = qB/(2*pi*m), pitch of helix',
          c22: 7, c23: 8, c24: 10, c25: 3, c26: 'N/A',
          total: 28, avgPerPaper: 0.70, paperCoverage: 52.5, subjectWeightage: 1.40,
          priority: 'Moderate', uniqueQuestions: 26, totalOccurrences: 28,
          rationale: 'Helical path kinematics when velocity is inclined at angle theta to uniform B field.'
        },
        {
          name: 'Ampere’s Circuital Law & Solenoid/Toroid Field',
          subtopic: 'Integral B.dl = mu0*I_enc, long solenoid B = mu0*n*I, toroid B = mu0*N*I/(2*pi*r)',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 45.0, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'End field vs central field of solenoids and cylindrical conductor current distributions.'
        }
      ]
    },
    {
      chapter: 'Magnetic Materials',
      classLevel: 'Class 12',
      totalQuestions: 82,
      topics: [
        {
          name: 'Magnetic Susceptibility, Permeability & Curie Law',
          subtopic: 'chi_m = M/H, mu_r = 1 + chi_m, Curie law chi = C/T, Curie-Weiss law chi = C/(T - T_c)',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 62.5, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'Diamagnetic, paramagnetic and ferromagnetic material comparison under varying temperatures.'
        },
        {
          name: 'Gyromagnetic Ratio & Bohr Magneton of Orbiting Electron',
          subtopic: 'mu_e/L = e/(2m_e) = 8.8 x 10^10 C/kg, Bohr magneton mu_B = e*h/(4*pi*m_e) = 9.274 x 10^-24 A*m^2',
          c22: 7, c23: 8, c24: 9, c25: 2, c26: 'N/A',
          total: 26, avgPerPaper: 0.65, paperCoverage: 50.0, subjectWeightage: 1.30,
          priority: 'Moderate', uniqueQuestions: 24, totalOccurrences: 26,
          rationale: 'Orbital magnetic dipole moment calculation for ground state electron in hydrogen atom.'
        },
        {
          name: 'Hysteresis Loop, Retentivity & Coercivity in Ferromagnets',
          subtopic: 'B-H curve, residual magnetism, coercive field, hysteresis energy loss per cycle = area of loop',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Selection of soft iron vs steel for permanent magnets and electromagnet cores.'
        }
      ]
    },
    {
      chapter: 'Electromagnetic Induction',
      classLevel: 'Class 12',
      totalQuestions: 92,
      topics: [
        {
          name: 'Motional EMF & Faraday’s Induced Current Calculations',
          subtopic: 'e = B*l*v, rotating rod EMF e = 1/2*B*omega*l^2, induced current I = e/R, magnetic braking force F = B^2*l^2*v/R',
          c22: 11, c23: 12, c24: 14, c25: 4, c26: 'N/A',
          total: 41, avgPerPaper: 1.03, paperCoverage: 67.5, subjectWeightage: 2.05,
          priority: 'High', uniqueQuestions: 37, totalOccurrences: 41,
          rationale: 'Rotating spokes of wheel in Earth magnetic field and sliding conduct rails.'
        },
        {
          name: 'Self-Inductance & Mutual Inductance of Coils',
          subtopic: 'e = -L*(dI/dt), L = mu0*N^2*A/l, mutual inductance M = mu0*N1*N2*A/l, coupling coefficient k = M/sqrt(L1*L2)',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 57.5, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Stored magnetic energy U = 1/2*L*I^2 and rate of change of current in inductor coils.'
        },
        {
          name: 'Eddy Currents, Induction Coil & Energy Dissipation',
          subtopic: 'Lenz law verification, eddy current damping in dead-beat galvanometer, laminated core reduction',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Direction of induced current loops opposing flux change.'
        }
      ]
    },
    {
      chapter: 'AC Circuits',
      classLevel: 'Class 12',
      totalQuestions: 124,
      topics: [
        {
          name: 'Series LCR Resonance & Quality Factor (Q-Factor)',
          subtopic: 'Resonance frequency f_r = 1/(2*pi*sqrt(L*C)), impedance Z = R at resonance, Q = 1/R * sqrt(L/C) = omega_r*L/R, bandwidth Delta omega = R/L',
          c22: 13, c23: 15, c24: 17, c25: 5, c26: 'N/A',
          total: 50, avgPerPaper: 1.25, paperCoverage: 75.0, subjectWeightage: 2.50,
          priority: 'Very High', uniqueQuestions: 45, totalOccurrences: 50,
          rationale: 'Top 10 Physics topic; sharp resonance tuning and voltage magnification.'
        },
        {
          name: 'Average Power in AC Circuit, Power Factor & Wattless Current',
          subtopic: 'P_avg = V_rms * I_rms * cos(phi), power factor cos(phi) = R/Z, wattless current I_w = I_rms * sin(phi)',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 55.0, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 31,
          rationale: 'Phase angle between AC voltage and current in LR, CR and LCR circuits.'
        },
        {
          name: 'Pure Inductive, Capacitive & Resistive AC Phasors',
          subtopic: 'Inductive reactance X_L = omega*L, capacitive reactance X_C = 1/(omega*C), phase leads and lags',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Direct reactance frequency dependence (X_L vs f is linear, X_C vs f is hyperbolic).'
        },
        {
          name: 'Transformer Working, Turn Ratio & Efficiency',
          subtopic: 'Vs/Vp = Ns/Np = Ip/Is, transformer efficiency eta = (P_out / P_in) * 100%, core loss minimization',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Step-up and step-down transformer voltage/current conversions.'
        }
      ]
    },
    {
      chapter: 'Dual Nature of Radiation and Matter',
      classLevel: 'Class 12',
      totalQuestions: 107,
      topics: [
        {
          name: 'Einstein’s Photoelectric Equation & Stopping Potential',
          subtopic: 'h*nu = phi0 + e*V0 = phi0 + 1/2*m*v_max^2, stopping potential V0 vs frequency graph slope = h/e, work function',
          c22: 16, c23: 18, c24: 19, c25: 6, c26: 'N/A',
          total: 59, avgPerPaper: 1.48, paperCoverage: 82.5, subjectWeightage: 2.95,
          priority: 'Very High', uniqueQuestions: 53, totalOccurrences: 59,
          rationale: 'Rank #6 in Physics; threshold wavelength lambda0 and photoelectric current saturation.'
        },
        {
          name: 'de Broglie Wavelength of Charged & Neutral Particles',
          subtopic: 'lambda = h/p = h/sqrt(2*m*E_k), for electron accelerated through V volts lambda = 1.227/sqrt(V) nm = 12.27/sqrt(V) Angstrom',
          c22: 9, c23: 10, c24: 12, c25: 3, c26: 'N/A',
          total: 34, avgPerPaper: 0.85, paperCoverage: 60.0, subjectWeightage: 1.70,
          priority: 'High', uniqueQuestions: 31, totalOccurrences: 34,
          rationale: 'Ratio of de Broglie wavelengths of proton, deuteron and alpha particle accelerated through same potential.'
        },
        {
          name: 'Davisson-Germer Experiment & Wave-Particle Duality',
          subtopic: 'Bragg law 2*d*sin(theta) = n*lambda in nickel crystal diffraction, confirming de Broglie hypothesis',
          c22: 4, c23: 4, c24: 5, c25: 1, c26: 'N/A',
          total: 14, avgPerPaper: 0.35, paperCoverage: 32.5, subjectWeightage: 0.70,
          priority: 'Moderate', uniqueQuestions: 14, totalOccurrences: 14,
          rationale: 'Peak scattering angle 50 degrees at accelerating voltage 54V.'
        }
      ]
    },
    {
      chapter: 'Structure of Atoms and Nuclei',
      classLevel: 'Class 12',
      totalQuestions: 114,
      topics: [
        {
          name: 'Bohr’s Postulates & Spectral Series Wavelengths',
          subtopic: '1/lambda = R*Z^2*(1/n1^2 - 1/n2^2), Lyman (UV), Balmer (Visible), Paschen (IR), radius r_n = 0.529*n^2/Z Angstrom',
          c22: 13, c23: 15, c24: 16, c25: 5, c26: 'N/A',
          total: 49, avgPerPaper: 1.23, paperCoverage: 75.0, subjectWeightage: 2.45,
          priority: 'Very High', uniqueQuestions: 44, totalOccurrences: 49,
          rationale: 'Shortest vs longest wavelength transitions across Lyman and Balmer series.'
        },
        {
          name: 'Radioactive Decay Law, Half-Life & Activity Decay',
          subtopic: 'N(t) = N0*e^(-lambda*t), half-life t_1/2 = 0.693/lambda, activity A = lambda*N, mean life tau = 1/lambda',
          c22: 10, c23: 12, c24: 13, c25: 4, c26: 'N/A',
          total: 39, avgPerPaper: 0.98, paperCoverage: 65.0, subjectWeightage: 1.95,
          priority: 'High', uniqueQuestions: 36, totalOccurrences: 39,
          rationale: 'Fraction remaining after n half-lives and carbon dating decay ratios.'
        },
        {
          name: 'Nuclear Binding Energy Curve, Mass Defect & Q-Value',
          subtopic: 'Delta m = [Z*m_p + (A-Z)*m_n] - M_nucleus, BE = Delta m * 931.5 MeV, BE per nucleon stability peak at Fe-56',
          c22: 7, c23: 8, c24: 9, c25: 2, c26: 'N/A',
          total: 26, avgPerPaper: 0.65, paperCoverage: 50.0, subjectWeightage: 1.30,
          priority: 'Moderate', uniqueQuestions: 24, totalOccurrences: 26,
          rationale: 'Fission and fusion energy release calculations from binding energy differences.'
        }
      ]
    },
    {
      chapter: 'Semiconductor Devices',
      classLevel: 'Class 12',
      totalQuestions: 142,
      topics: [
        {
          name: 'Logic Gate Combinations & Truth Table Output',
          subtopic: 'AND, OR, NOT, NAND, NOR, XOR logic, De Morgan theorems (A+B)\' = A\'B\', universal gates, Boolean simplification',
          c22: 17, c23: 18, c24: 21, c25: 6, c26: 'N/A',
          total: 62, avgPerPaper: 1.55, paperCoverage: 85.0, subjectWeightage: 3.10,
          priority: 'Very High', uniqueQuestions: 56, totalOccurrences: 62,
          rationale: 'Rank #5 in Physics; guaranteed 1 to 2 questions in almost every MHT CET shift.'
        },
        {
          name: 'Zener Diode as Voltage Regulator & Breakdown',
          subtopic: 'Zener voltage V_z, series current limiting resistor R_s = (V_in - V_z)/I, load current regulation',
          c22: 9, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 33, avgPerPaper: 0.83, paperCoverage: 60.0, subjectWeightage: 1.65,
          priority: 'High', uniqueQuestions: 30, totalOccurrences: 33,
          rationale: 'Reverse breakdown operation maintaining fixed terminal output voltage.'
        },
        {
          name: 'Half-Wave and Full-Wave Rectifier Ripple Factor & Efficiency',
          subtopic: 'Half wave ripple factor r = 1.21, efficiency = 40.6%, full wave ripple factor r = 0.48, efficiency = 81.2%, output frequency',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Center-tapped and bridge rectifier output waveform and filter capacitor smoothing.'
        },
        {
          name: 'P-N Junction Diode Barrier Potential & Depletion Layer',
          subtopic: 'Depletion layer width changes under forward and reverse bias, dynamic resistance r_d = Delta V / Delta I',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Barrier potential drop across silicon (0.7V) and germanium (0.3V).'
        }
      ]
    },

    // --- CLASS 11 CHAPTERS (20% Weightage) ---
    {
      chapter: 'Motion in a Plane (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 85,
      topics: [
        {
          name: 'Projectile Motion: Height, Flight Time & Range',
          subtopic: 'H = u^2 sin^2(theta)/(2g), T = 2u sin(theta)/g, R = u^2 sin(2theta)/g, complementary angles equal range',
          c22: 10, c23: 11, c24: 13, c25: 4, c26: 'N/A',
          total: 38, avgPerPaper: 0.95, paperCoverage: 67.5, subjectWeightage: 1.90,
          priority: 'High', uniqueQuestions: 35, totalOccurrences: 38,
          rationale: 'Core Class 11 trajectory problem, ratio of range to maximum height.'
        },
        {
          name: 'Uniform Circular Motion & Centripetal Acceleration',
          subtopic: 'a_c = v^2/r = omega^2*r = 4*pi^2*r/T^2, angular displacement, tangential acceleration in non-UCM',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Connecting angular and linear kinematic variables.'
        },
        {
          name: 'Resolution of Vectors & Relative Velocity in 2D',
          subtopic: 'Vector dot and cross products, river boat problem shortest path vs shortest time',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Relative velocity of rain falling on moving person.'
        }
      ]
    },
    {
      chapter: 'Laws of Motion (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 96,
      topics: [
        {
          name: 'Friction: Static, Kinetic, Angle of Repose & Incline',
          subtopic: 'f_s <= mu_s * N, f_k = mu_k * N, angle of repose theta_r = arctan(mu_s), acceleration down rough plane',
          c22: 11, c23: 13, c24: 14, c25: 4, c26: 'N/A',
          total: 42, avgPerPaper: 1.05, paperCoverage: 70.0, subjectWeightage: 2.10,
          priority: 'High', uniqueQuestions: 38, totalOccurrences: 42,
          rationale: 'Top Class 11 Physics topic; block sliding down incline and minimum force to prevent slipping.'
        },
        {
          name: 'Connected Body Accelerations & Pulley Systems',
          subtopic: 'Atwood machine a = (m1 - m2)g/(m1 + m2), string tension T = 2*m1*m2*g/(m1 + m2)',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 57.5, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Free body diagram analysis of masses on smooth and rough horizontal surfaces.'
        },
        {
          name: 'Conservation of Linear Momentum & Impulse',
          subtopic: 'Recoil of gun, explosive fragmentation into two/three parts, impulse J = Delta p = integral F dt',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 21, totalOccurrences: 23,
          rationale: 'Collision kinetics and area under force-time graphs.'
        }
      ]
    },
    {
      chapter: 'Gravitation (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 102,
      topics: [
        {
          name: 'Acceleration Due to Gravity Variation with Altitude & Depth',
          subtopic: 'g_h = g*(1 - 2h/R) for h << R, g_h = g*R^2/(R+h)^2, depth g_d = g*(1 - d/R), rotation g\' = g - omega^2*R*cos^2(lambda)',
          c22: 12, c23: 13, c24: 15, c25: 5, c26: 'N/A',
          total: 45, avgPerPaper: 1.13, paperCoverage: 72.5, subjectWeightage: 2.25,
          priority: 'High', uniqueQuestions: 41, totalOccurrences: 45,
          rationale: 'Very consistent question; equating g at altitude h with g at depth d.'
        },
        {
          name: 'Kepler’s Laws of Planetary Motion (T^2 proportional to r^3)',
          subtopic: 'Law of areas (areal velocity dA/dt = L/(2m) = const), period T1^2/T2^2 = r1^3/r2^3',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Ratio of revolution times when orbital semi-major axis increases or decreases.'
        },
        {
          name: 'Escape Velocity & Satellite Orbital Speed',
          subtopic: 'v_e = sqrt(2*G*M/R) = sqrt(2*g*R) = 11.2 km/s, v_c = sqrt(G*M/r), relation v_e = sqrt(2)*v_c, geostationary satellite orbit',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Energy required to project satellite from surface into circular orbit of radius r.'
        }
      ]
    },
    {
      chapter: 'Sound (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 68,
      topics: [
        {
          name: 'Doppler Effect in Sound: Moving Source and Observer',
          subtopic: 'Apparent frequency n\' = n * (v +- v_o)/(v -+ v_s), train approaching station platform',
          c22: 11, c23: 12, c24: 14, c25: 4, c26: 'N/A',
          total: 41, avgPerPaper: 1.03, paperCoverage: 67.5, subjectWeightage: 2.05,
          priority: 'High', uniqueQuestions: 37, totalOccurrences: 41,
          rationale: 'Primary acoustic calculation tested from Class 11 syllabus.'
        },
        {
          name: 'Velocity of Sound: Laplace Formula & Environmental Factors',
          subtopic: 'v = sqrt(gamma*P/rho) = sqrt(gamma*R*T/M), independent of pressure changes, effect of humidity and temperature',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Temperature at which velocity of sound is doubled.'
        }
      ]
    },
    {
      chapter: 'Optics (Class 11 Component)',
      classLevel: 'Class 11',
      totalQuestions: 72,
      topics: [
        {
          name: 'Refraction at Spherical Surfaces & Lens Maker’s Formula',
          subtopic: '1/f = (mu - 1)*(1/R1 - 1/R2), equivalent focal length 1/F = 1/f1 + 1/f2 - d/(f1*f2), cutting lenses',
          c22: 10, c23: 12, c24: 13, c25: 4, c26: 'N/A',
          total: 39, avgPerPaper: 0.98, paperCoverage: 65.0, subjectWeightage: 1.95,
          priority: 'High', uniqueQuestions: 35, totalOccurrences: 39,
          rationale: 'Focal length changes when convex lens is immersed in water or liquid of differing index.'
        },
        {
          name: 'Prism Deviation Formula & Total Internal Reflection',
          subtopic: 'mu = sin((A + delta_m)/2) / sin(A/2), thin prism delta = (mu - 1)*A, critical angle sin(i_c) = 1/mu',
          c22: 9, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 33, avgPerPaper: 0.83, paperCoverage: 60.0, subjectWeightage: 1.65,
          priority: 'High', uniqueQuestions: 30, totalOccurrences: 33,
          rationale: 'Minimum angle of deviation in equilateral glass prisms.'
        }
      ]
    }
  ],

  Chemistry: [
    // --- CLASS 12 CHAPTERS (80% Weightage) ---
    {
      chapter: 'Solid State',
      classLevel: 'Class 12',
      totalQuestions: 155,
      topics: [
        {
          name: 'Unit Cell Edge Length, Density & Packing Efficiency',
          subtopic: 'rho = (z * M) / (a^3 * N_A), SCC (z=1, r=a/2), BCC (z=2, r=sqrt(3)*a/4), FCC (z=4, r=sqrt(2)*a/4), packing efficiency 52.4%, 68%, 74%',
          c22: 19, c23: 22, c24: 24, c25: 8, c26: 'N/A',
          total: 73, avgPerPaper: 1.83, paperCoverage: 87.5, subjectWeightage: 3.65,
          priority: 'Very High', uniqueQuestions: 66, totalOccurrences: 73,
          rationale: 'Rank #3 in Chemistry; unit cell density and edge length calculations are standard numerical staples.'
        },
        {
          name: 'Point Defects: Schottky Defect vs Frenkel Defect',
          subtopic: 'Schottky (stoichiometric missing cation/anion, density decreases, NaCl, KCl, AgBr), Frenkel (interstitial dislocation, density unchanged, ZnS, AgCl, AgBr)',
          c22: 10, c23: 12, c24: 13, c25: 4, c26: 'N/A',
          total: 39, avgPerPaper: 0.98, paperCoverage: 65.0, subjectWeightage: 1.95,
          priority: 'High', uniqueQuestions: 36, totalOccurrences: 39,
          rationale: 'Consistently tested theory question; AgBr exhibiting both Frenkel and Schottky defects.'
        },
        {
          name: 'Number of Atoms & Void Coordinates (Octahedral / Tetrahedral)',
          subtopic: 'For N close packed spheres, number of octahedral voids = N, tetrahedral voids = 2N, formula of ionic crystal',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Finding chemical formula when atoms A occupy FCC lattice and B occupy fraction of tetrahedral voids.'
        },
        {
          name: 'Magnetic & Electrical Properties of Solids',
          subtopic: 'Ferromagnetic, antiferromagnetic, ferrimagnetic domains, n-type and p-type semiconductor doping',
          c22: 4, c23: 5, c24: 6, c25: 1, c26: 'N/A',
          total: 16, avgPerPaper: 0.40, paperCoverage: 35.0, subjectWeightage: 0.80,
          priority: 'Moderate', uniqueQuestions: 15, totalOccurrences: 16,
          rationale: 'Curie temperature and magnetic moment orientation in transition metal oxides.'
        }
      ]
    },
    {
      chapter: 'Solutions',
      classLevel: 'Class 12',
      totalQuestions: 180,
      topics: [
        {
          name: 'Colligative Properties: Boiling Elevation & Freezing Depression',
          subtopic: 'Delta T_b = K_b * m, Delta T_f = K_f * m, determination of molar mass M2 = (1000 * K_b * w2) / (Delta T_b * w1), molal depression constant',
          c22: 20, c23: 23, c24: 25, c25: 8, c26: 'N/A',
          total: 76, avgPerPaper: 1.90, paperCoverage: 90.0, subjectWeightage: 3.80,
          priority: 'Very High', uniqueQuestions: 69, totalOccurrences: 76,
          rationale: 'Rank #2 in Chemistry; highest recurring physical chemistry numerical chapter in MHT CET.'
        },
        {
          name: 'Osmotic Pressure & Van’t Hoff Factor',
          subtopic: 'Pi = i * C * R * T, degree of dissociation alpha = (i - 1)/(n - 1), degree of association alpha = (1 - i)/(1 - 1/n), isotonic solutions',
          c22: 14, c23: 15, c24: 17, c25: 5, c26: 'N/A',
          total: 51, avgPerPaper: 1.28, paperCoverage: 75.0, subjectWeightage: 2.55,
          priority: 'Very High', uniqueQuestions: 47, totalOccurrences: 51,
          rationale: 'Direct osmotic comparison and abnormal molecular weights of dissociating electrolytes (NaCl, CaCl2).'
        },
        {
          name: 'Raoult’s Law & Relative Lowering of Vapour Pressure',
          subtopic: '(P1_0 - P) / P1_0 = x2 = (w2 * M1) / (M2 * w1), ideal vs non-ideal solutions, positive/negative deviations',
          c22: 9, c23: 10, c24: 12, c25: 3, c26: 'N/A',
          total: 34, avgPerPaper: 0.85, paperCoverage: 62.5, subjectWeightage: 1.70,
          priority: 'High', uniqueQuestions: 31, totalOccurrences: 34,
          rationale: 'Vapour pressure lowering of solvent upon adding non-volatile solute and azeotropic mixtures.'
        },
        {
          name: 'Henry’s Law Constant & Gas Solubility',
          subtopic: 'S = K_H * P, carbonated beverages, scuba diving bends, effect of temperature on gas solubility in liquids',
          c22: 5, c23: 6, c24: 6, c25: 2, c26: 'N/A',
          total: 19, avgPerPaper: 0.48, paperCoverage: 40.0, subjectWeightage: 0.95,
          priority: 'Moderate', uniqueQuestions: 18, totalOccurrences: 19,
          rationale: 'Henry constant dimensions and gas absorption coefficients.'
        }
      ]
    },
    {
      chapter: 'Ionic Equilibria',
      classLevel: 'Class 12',
      totalQuestions: 147,
      topics: [
        {
          name: 'Buffer Solutions, Henderson Equation & Ksp Solubility',
          subtopic: 'Acidic buffer pH = pKa + log([salt]/[acid]), basic buffer pOH = pKb + log([salt]/[base]), K_sp = s^x * s^y, condition of precipitation (IP > K_sp)',
          c22: 16, c23: 19, c24: 21, c25: 7, c26: 'N/A',
          total: 63, avgPerPaper: 1.58, paperCoverage: 82.5, subjectWeightage: 3.15,
          priority: 'Very High', uniqueQuestions: 57, totalOccurrences: 63,
          rationale: 'Rank #6 in Chemistry; blood buffer, common ion effect on sparingly soluble salts (AgCl, BaSO4).'
        },
        {
          name: 'pH and pOH Calculations for Weak Acids and Bases',
          subtopic: 'pH = -log[H3O+], pOH = -log[OH-], pH + pOH = 14 at 298K, [H+] = sqrt(Ka * C), autoionization Kw = 10^-14',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 62.5, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'Acidity of dilute solutions (including 10^-8 M HCl taking water dissociation into account).'
        },
        {
          name: 'Ostwald’s Dilution Law & Degree of Dissociation',
          subtopic: 'K_a = alpha^2 * C / (1 - alpha) approx alpha^2 * C, alpha = sqrt(K_a / C), weak electrolyte dissociation',
          c22: 7, c23: 8, c24: 10, c25: 3, c26: 'N/A',
          total: 28, avgPerPaper: 0.70, paperCoverage: 52.5, subjectWeightage: 1.40,
          priority: 'Moderate', uniqueQuestions: 26, totalOccurrences: 28,
          rationale: 'Degree of dissociation of acetic acid or ammonium hydroxide at varying dilutions.'
        },
        {
          name: 'Salt Hydrolysis Types & Hydrolysis Constant',
          subtopic: 'Salts of strong acid + weak base (pH < 7), weak acid + strong base (pH > 7), Kh = Kw/(Ka * Kb)',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Classifying aqueous salt solutions as acidic, neutral, or alkaline.'
        }
      ]
    },
    {
      chapter: 'Chemical Thermodynamics',
      classLevel: 'Class 12',
      totalQuestions: 156,
      topics: [
        {
          name: 'First Law, Enthalpy of Reaction & Hess’s Law',
          subtopic: 'Delta U = q + w, Delta H = Delta U + Delta n_g * R * T, Hess law of constant heat summation, standard enthalpies of formation',
          c22: 16, c23: 18, c24: 20, c25: 6, c26: 'N/A',
          total: 60, avgPerPaper: 1.50, paperCoverage: 80.0, subjectWeightage: 3.00,
          priority: 'Very High', uniqueQuestions: 54, totalOccurrences: 60,
          rationale: 'Rank #7 in Chemistry; heat of combustion and enthalpy of formation algebraic combinations.'
        },
        {
          name: 'Gibbs Free Energy & Spontaneity Conditions',
          subtopic: 'Delta G = Delta H - T * Delta S, Delta G_0 = -2.303 * R * T * log(K), spontaneous criteria (Delta G < 0, Delta S_total > 0)',
          c22: 11, c23: 13, c24: 14, c25: 4, c26: 'N/A',
          total: 42, avgPerPaper: 1.05, paperCoverage: 67.5, subjectWeightage: 2.10,
          priority: 'High', uniqueQuestions: 38, totalOccurrences: 42,
          rationale: 'Determining the temperature at which non-spontaneous endothermic reactions become feasible.'
        },
        {
          name: 'Maximum Work in Isothermal Reversible Expansion',
          subtopic: 'W_max = -2.303 * n * R * T * log10(V2 / V1) = -2.303 * n * R * T * log10(P1 / P2)',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 57.5, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Direct work computation in Joules when ideal gas expands isothermally against opposing pressure.'
        },
        {
          name: 'Bond Enthalpies & Standard State Conventions',
          subtopic: 'Delta H_rxn = Sum(Bond enthalpies of reactants) - Sum(Bond enthalpies of products), atomization energy',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Estimating reaction enthalpies from average covalent bond energies (C-H, C=C, C-C).'
        }
      ]
    },
    {
      chapter: 'Electrochemistry',
      classLevel: 'Class 12',
      totalQuestions: 166,
      topics: [
        {
          name: 'Nernst Equation & Cell Potential Calculations',
          subtopic: 'E_cell = E0_cell - (0.0592 / n) * log10(Q), relationship with equilibrium constant Delta G0 = -n*F*E0_cell = -2.303*R*T*log(K)',
          c22: 17, c23: 19, c24: 22, c25: 7, c26: 'N/A',
          total: 65, avgPerPaper: 1.63, paperCoverage: 82.5, subjectWeightage: 3.25,
          priority: 'Very High', uniqueQuestions: 59, totalOccurrences: 65,
          rationale: 'Rank #5 in Chemistry; Daniel cell, concentration cells, non-standard condition EMF.'
        },
        {
          name: 'Kohlrausch’s Law & Limiting Molar Conductivity',
          subtopic: 'Lambda0_m = nu_+ * lambda0_+ + nu_- * lambda0_-, determination of Lambda0_m for weak electrolytes (CH3COOH), degree of dissociation alpha = Lambda_m / Lambda0_m',
          c22: 13, c23: 15, c24: 16, c25: 5, c26: 'N/A',
          total: 49, avgPerPaper: 1.23, paperCoverage: 72.5, subjectWeightage: 2.45,
          priority: 'High', uniqueQuestions: 44, totalOccurrences: 49,
          rationale: 'Independent migration of ions and molar conductivity at infinite dilution.'
        },
        {
          name: 'Faraday’s Laws of Electrolysis & Deposited Mass',
          subtopic: 'w = Z * I * t = (M / n*F) * I * t, Faraday constant F = 96500 C/mol, second law w1/E1 = w2/E2 in series cells',
          c22: 8, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 32, avgPerPaper: 0.80, paperCoverage: 57.5, subjectWeightage: 1.60,
          priority: 'High', uniqueQuestions: 30, totalOccurrences: 32,
          rationale: 'Mass of silver or copper electroplated at cathode given current and duration.'
        },
        {
          name: 'Lead Storage Battery & Fuel Cell Reactions',
          subtopic: 'Lead accumulator charge/discharge equations (Pb + PbO2 + 2H2SO4 <=> 2PbSO4 + 2H2O), H2-O2 fuel cell alkaline electrolyte',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Specific density change of sulfuric acid and cathodic/anodic chemical half-reactions.'
        }
      ]
    },
    {
      chapter: 'Chemical Kinetics',
      classLevel: 'Class 12',
      totalQuestions: 169,
      topics: [
        {
          name: 'Integrated Rate Law for 1st Order Reactions & Half-Life',
          subtopic: 'k = (2.303 / t) * log10(a / (a - x)), half life t_1/2 = 0.693 / k (independent of initial concentration), graphical plots log[A] vs t',
          c22: 22, c23: 25, c24: 27, c25: 9, c26: 'N/A',
          total: 83, avgPerPaper: 2.08, paperCoverage: 95.0, subjectWeightage: 4.15,
          priority: 'Very High', uniqueQuestions: 75, totalOccurrences: 83,
          rationale: 'Rank #1 in Chemistry across all five years! Appeared in 38 out of 40 analyzed shifts.'
        },
        {
          name: 'Arrhenius Equation, Activation Energy & Rate Constant',
          subtopic: 'k = A * e^(-E_a / (R*T)), log10(k2 / k1) = (E_a / 2.303*R) * [(T2 - T1) / (T1 * T2)], slope of Arrhenius plot = -E_a / (2.303*R)',
          c22: 10, c23: 12, c24: 13, c25: 4, c26: 'N/A',
          total: 39, avgPerPaper: 0.98, paperCoverage: 65.0, subjectWeightage: 1.95,
          priority: 'High', uniqueQuestions: 35, totalOccurrences: 39,
          rationale: 'Effect of catalyst lowering activation energy and temperature doubling rate of reaction.'
        },
        {
          name: 'Order and Molecularity & Initial Rate Method',
          subtopic: 'Differential rate law r = k[A]^x[B]^y, determining partial orders x and y from table of initial reactant concentrations',
          c22: 7, c23: 8, c24: 10, c25: 3, c26: 'N/A',
          total: 28, avgPerPaper: 0.70, paperCoverage: 52.5, subjectWeightage: 1.40,
          priority: 'Moderate', uniqueQuestions: 26, totalOccurrences: 28,
          rationale: 'Units of rate constant k = (mol/L)^(1-n) * s^-1 for zero, first and second order reactions.'
        },
        {
          name: 'Pseudo-First Order Reactions & Zero Order Kinetics',
          subtopic: 'Acid-catalyzed inversion of cane sugar, hydrolysis of ethyl acetate in excess water, zero order integrated rate [A]_t = [A]_0 - k*t',
          c22: 5, c23: 6, c26: 'N/A', c24: 6, c25: 2,
          total: 19, avgPerPaper: 0.48, paperCoverage: 40.0, subjectWeightage: 0.95,
          priority: 'Moderate', uniqueQuestions: 18, totalOccurrences: 19,
          rationale: 'Identification of reaction mechanisms where large solvent concentration acts as pseudo-constant.'
        }
      ]
    },
    {
      chapter: 'Coordination Compounds',
      classLevel: 'Class 12',
      totalQuestions: 154,
      topics: [
        {
          name: 'IUPAC Nomenclature, Werner Theory & Magnetic Moments',
          subtopic: 'Coordination IUPAC naming conventions, primary (ionizable) vs secondary (coordination number) valence, spin-only magnetic moment mu = sqrt(n*(n+2)) BM',
          c22: 18, c23: 20, c24: 23, c25: 7, c26: 'N/A',
          total: 68, avgPerPaper: 1.70, paperCoverage: 85.0, subjectWeightage: 3.40,
          priority: 'Very High', uniqueQuestions: 62, totalOccurrences: 68,
          rationale: 'Rank #4 in Chemistry; finding number of unpaired electrons in octahedral and tetrahedral complexes.'
        },
        {
          name: 'Crystal Field Theory (CFT) Splitting & Spectrochemical Series',
          subtopic: 'Octahedral Delta_o splitting into lower t_2g and higher e_g, tetrahedral Delta_t = 4/9 * Delta_o, strong field vs weak field ligands (CN- > CO > NH3 > H2O > halides)',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 62.5, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'High spin vs low spin configurations for d^4, d^5, d^6 transition metal ions.'
        },
        {
          name: 'Isomerism: Geometrical, Optical & Structural',
          subtopic: 'Geometrical cis/trans in square planar [Pt(NH3)2Cl2] and octahedral [Co(NH3)4Cl2]+, optical enantiomers in [Co(en)3]^3+, linkage, ionization, hydrate isomers',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Identifying pairs of coordination compounds that produce distinct precipitates with AgNO3 or BaCl2.'
        },
        {
          name: 'Valence Bond Theory (VBT) Hybridization & Geometry',
          subtopic: 'Inner orbital (d2sp3, diamagnetic) vs outer orbital (sp3d2, paramagnetic) complexes, square planar dsp2',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Predicting magnetic behavior of [Ni(CN)4]2- vs [NiCl4]2-.'
        }
      ]
    },
    {
      chapter: 'Halogen Derivatives',
      classLevel: 'Class 12',
      totalQuestions: 141,
      topics: [
        {
          name: 'SN1 vs SN2 Mechanisms, Kinetics & Stereochemistry',
          subtopic: 'SN1 (two steps, carbocation intermediate, 3>2>1, racemization, polar protic solvent), SN2 (single step, transition state, 1>2>3, Walden inversion, polar aprotic)',
          c22: 15, c23: 17, c24: 20, c25: 6, c26: 'N/A',
          total: 58, avgPerPaper: 1.45, paperCoverage: 80.0, subjectWeightage: 2.90,
          priority: 'Very High', uniqueQuestions: 52, totalOccurrences: 58,
          rationale: 'Rank #8 in Chemistry; stereochemical outcome and nucleophilic substitution rate comparisons.'
        },
        {
          name: 'Grignard Reagent (R-MgX) Reactions with Carbonyls',
          subtopic: 'RMgX + HCHO -> 1 degree alcohol, RMgX + R\'CHO -> 2 degree alcohol, RMgX + R\'COR\'\' -> 3 degree alcohol, reaction with CO2 -> carboxylic acid',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 60.0, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'High-yield multi-step synthetic roadmap transformations in organic chemistry.'
        },
        {
          name: 'Dehydrohalogenation (Saytzeff vs Hoffmann Elimination)',
          subtopic: 'Beta-elimination using alcoholic KOH, Saytzeff rule (more substituted alkene is major product), bulky base steric control',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Major alkene determination for 2-bromobutane treated with alc. KOH.'
        },
        {
          name: 'Haloarenes Electrophilic Substitution & Low Reactivity',
          subtopic: 'Chlorobenzene resonance deactivation, ortho/para directing due to +M effect, dow process harsh conditions',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Partial double bond character of C-Cl bond making nucleophilic displacement difficult.'
        }
      ]
    },
    {
      chapter: 'Aldehydes, Ketones and Carboxylic Acids',
      classLevel: 'Class 12',
      totalQuestions: 143,
      topics: [
        {
          name: 'Aldol Condensation, Cannizzaro & Haloform Reactions',
          subtopic: 'Aldol (alpha-hydrogen containing aldehydes, beta-hydroxy aldehyde -> alpha,beta-unsaturated enal), Cannizzaro (aldehydes without alpha-H, disproportionation into alcohol + carboxylate), Iodoform test (CH3-C=O or CH3-CH(OH) gives yellow CHI3 ppt)',
          c22: 15, c23: 17, c24: 19, c25: 6, c26: 'N/A',
          total: 57, avgPerPaper: 1.43, paperCoverage: 77.5, subjectWeightage: 2.85,
          priority: 'Very High', uniqueQuestions: 51, totalOccurrences: 57,
          rationale: 'Rank #9 in Chemistry; classic organic named reactions tested with high certainty.'
        },
        {
          name: 'Nucleophilic Addition: HCN, NaHSO3, NH2-G Derivatives',
          subtopic: 'Cyanohydrin formation, bisulfite addition for purification, 2,4-DNP derivative (Brady reagent), oximes, hydrazones, semicarbazones',
          c22: 9, c23: 10, c24: 12, c25: 3, c26: 'N/A',
          total: 34, avgPerPaper: 0.85, paperCoverage: 60.0, subjectWeightage: 1.70,
          priority: 'High', uniqueQuestions: 31, totalOccurrences: 34,
          rationale: 'Identification of functional group derivatives and orange-red precipitate tests.'
        },
        {
          name: 'Acidic Strength of Substituted Carboxylic Acids',
          subtopic: '-I effect of halogens increases acidity (CF3COOH > CCl3COOH > CH2ClCOOH > CH3COOH), ortho effect in benzoic acids, pKa comparisons',
          c22: 7, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 29, avgPerPaper: 0.73, paperCoverage: 55.0, subjectWeightage: 1.45,
          priority: 'High', uniqueQuestions: 27, totalOccurrences: 29,
          rationale: 'Ordering organic acids by pKa value based on resonance stabilization of carboxylate anion.'
        },
        {
          name: 'Clemmensen & Wolff-Kishner Carbonyl Reductions',
          subtopic: 'Clemmensen (Zn-Hg / conc. HCl for acid-stable substrates), Wolff-Kishner (NH2NH2 / KOH, ethylene glycol for base-stable substrates) reducing >C=O to >CH2',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 45.0, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Direct alkane conversion methods from acetophenone or propanone.'
        }
      ]
    },
    {
      chapter: 'Amines',
      classLevel: 'Class 12',
      totalQuestions: 133,
      topics: [
        {
          name: 'Basicity of Amines & Hoffmann Bromamide Degradation',
          subtopic: 'Aqueous basicity order: (CH3)2NH > CH3NH2 > (CH3)3N > NH3 (2>1>3) vs ethyl (2>3>1), Hoffmann bromamide (RCONH2 + Br2 + 4KOH -> RNH2 with one less carbon)',
          c22: 14, c23: 16, c24: 18, c25: 6, c26: 'N/A',
          total: 54, avgPerPaper: 1.35, paperCoverage: 77.5, subjectWeightage: 2.70,
          priority: 'Very High', uniqueQuestions: 48, totalOccurrences: 54,
          rationale: 'Rank #10 in Chemistry; inductive, steric and hydration interplay on nitrogen lone pair availability.'
        },
        {
          name: 'Diazonium Salts Coupling Reactions & Sandmeyer',
          subtopic: 'ArN2+Cl- preparation at 0-5 degrees C, Sandmeyer (CuCl/HCl, CuBr/HBr), Gattermann (Cu powder), azo dye coupling with phenol (orange dye) and aniline (yellow dye)',
          c22: 8, c23: 10, c24: 11, c25: 3, c26: 'N/A',
          total: 32, avgPerPaper: 0.80, paperCoverage: 57.5, subjectWeightage: 1.60,
          priority: 'High', uniqueQuestions: 30, totalOccurrences: 32,
          rationale: 'Versatile synthetic intermediate converting nitrobenzene into halobenzenes, benzonitrile or phenol.'
        },
        {
          name: 'Hinsberg Test & Carbylamine Reaction',
          subtopic: 'Hinsberg reagent (benzene sulfonyl chloride): 1 deg gives alkali-soluble sulfonamide, 2 deg gives alkali-insoluble, 3 deg does not react; Carbylamine test (RNH2 + CHCl3 + 3KOH -> foul smelling isocyanide RNC)',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Standard qualitative laboratory test to distinguish primary, secondary, and tertiary amines.'
        },
        {
          name: 'Gabriel Phthalimide Synthesis of Primary Aliphatic Amines',
          subtopic: 'Phthalimide + ethanolic KOH -> potassium phthalimide + R-X -> N-alkylphthalimide -> hydrazine/alkaline hydrolysis -> pure 1 degree aliphatic amine',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Why aromatic amines cannot be prepared by Gabriel phthalimide method (aryl halides resist SN2 attack).'
        }
      ]
    },

    // --- CLASS 11 CHAPTERS (20% Weightage) ---
    {
      chapter: 'Chemical Bonding (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 118,
      topics: [
        {
          name: 'VSEPR Theory, Hybridization & Geometry',
          subtopic: 'Steric number, sp, sp2, sp3, sp3d, sp3d2, lone pair repulsion, geometry of XeF4, SF4, ClF3, PCl5, NH3, H2O',
          c22: 14, c23: 16, c24: 18, c25: 5, c26: 'N/A',
          total: 53, avgPerPaper: 1.33, paperCoverage: 77.5, subjectWeightage: 2.65,
          priority: 'Very High', uniqueQuestions: 48, totalOccurrences: 53,
          rationale: 'Highest priority Class 11 Chemistry topic; finding lone pairs and bond angles.'
        },
        {
          name: 'Molecular Orbital Theory (MOT): Bond Order & Magnetism',
          subtopic: 'Electronic configuration of O2, N2, O2+, O2-, bond order = 1/2*(N_b - N_a), paramagnetic nature of O2 and B2',
          c22: 11, c23: 13, c24: 14, c25: 4, c26: 'N/A',
          total: 42, avgPerPaper: 1.05, paperCoverage: 67.5, subjectWeightage: 2.10,
          priority: 'High', uniqueQuestions: 38, totalOccurrences: 42,
          rationale: 'Comparing bond strength, bond length and magnetic moments across oxygen ionic species.'
        },
        {
          name: 'Dipole Moment & Hydrogen Bonding Types',
          subtopic: 'Intermolecular vs intramolecular H-bonding (o-nitrophenol steam volatile vs p-nitrophenol), net dipole moment of BF3, NF3 vs NH3',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Why dipole moment of NH3 (1.47 D) is significantly higher than NF3 (0.24 D).'
        }
      ]
    },
    {
      chapter: 'Basic Principles of Organic Chemistry (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 115,
      topics: [
        {
          name: 'IUPAC Nomenclature of Polyfunctional Aliphatic Compounds',
          subtopic: 'Priority order of functional groups (-COOH > -SO3H > ester > acid chloride > amide > nitrile > aldehyde > ketone > alcohol > amine), locant numbering',
          c22: 12, c23: 14, c24: 15, c25: 5, c26: 'N/A',
          total: 46, avgPerPaper: 1.15, paperCoverage: 72.5, subjectWeightage: 2.30,
          priority: 'High', uniqueQuestions: 42, totalOccurrences: 46,
          rationale: 'Correct systematic IUPAC name for branched organic compounds with multiple heteroatom groups.'
        },
        {
          name: 'Electronic Effects: Inductive, Mesomeric & Carbocation Stability',
          subtopic: '+I and -I groups, +M and -M resonance, hyperconjugation alpha-hydrogens, stability order of 3 > 2 > 1 carbocations and free radicals',
          c22: 10, c23: 12, c24: 13, c25: 4, c26: 'N/A',
          total: 39, avgPerPaper: 0.98, paperCoverage: 65.0, subjectWeightage: 1.95,
          priority: 'High', uniqueQuestions: 35, totalOccurrences: 39,
          rationale: 'Comparing stability of allylic, benzylic and alkyl intermediate carbocations.'
        },
        {
          name: 'Isomerism: Structural, Geometrical & Conformational',
          subtopic: 'Chain, position, functional, tautomerism (keto-enol), geometrical cis-trans across C=C, staggered vs eclipsed ethane conformations',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Torsional strain in Newman and Sawhorse projections of butane.'
        }
      ]
    },
    {
      chapter: 'Hydrocarbons (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 98,
      topics: [
        {
          name: 'Electrophilic Addition to Alkenes: Markovnikov vs Anti-Markovnikov',
          subtopic: 'Addition of HBr without peroxide (Markovnikov addition via carbocation), addition of HBr with benzoyl peroxide (Kharasch anti-Markovnikov free radical effect)',
          c22: 13, c23: 15, c24: 16, c25: 5, c26: 'N/A',
          total: 49, avgPerPaper: 1.23, paperCoverage: 75.0, subjectWeightage: 2.45,
          priority: 'Very High', uniqueQuestions: 44, totalOccurrences: 49,
          rationale: 'Key organic foundation topic; major product identification for propene with HX.'
        },
        {
          name: 'Electrophilic Aromatic Substitution of Benzene',
          subtopic: 'Nitration (HNO3/H2SO4, NO2+), Halogenation (Cl2/FeCl3), Friedel-Crafts alkylation and acylation (anhydrous AlCl3)',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 57.5, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Generating arenium ion electrophilic complex and carbocation rearrangements during alkylation.'
        },
        {
          name: 'Ozonolysis of Alkenes & Alkynes',
          subtopic: 'Reductive ozonolysis with O3 / Zn-H2O to identify structure of parent symmetrical or unsymmetrical alkene',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Deducing starting alkene from resulting mixture of methanal, ethanal and propanone.'
        }
      ]
    }
  ],

  Mathematics: [
    // --- CLASS 12 CHAPTERS (80% Weightage - 2 Marks Per Question) ---
    {
      chapter: 'Definite Integration',
      classLevel: 'Class 12',
      totalQuestions: 174,
      topics: [
        {
          name: 'Properties of Definite Integrals (King Property)',
          subtopic: 'integral_0^a f(x)dx = integral_0^a f(a-x)dx, integral_a^b f(x)dx = integral_a^b f(a+b-x)dx, sin^n(x)/(sin^n(x) + cos^n(x)) forms',
          c22: 24, c23: 27, c24: 30, c25: 10, c26: 'N/A',
          total: 91, avgPerPaper: 2.28, paperCoverage: 97.5, subjectWeightage: 4.55,
          priority: 'Very High', uniqueQuestions: 82, totalOccurrences: 91,
          rationale: 'Highest question producer across the entire MHT CET PCM examination! Present in 39 out of 40 shifts.'
        },
        {
          name: 'Definite Integrals of Odd and Even Functions',
          subtopic: 'integral_-a^a f(x)dx = 0 if f(-x) = -f(x); 2 * integral_0^a f(x)dx if f(-x) = f(x), splitting modulus integrals |x - c|',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 62.5, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'Quick evaluation of integrals with symmetric limits around origin.'
        },
        {
          name: 'Fundamental Theorem of Calculus & Definite Substitutions',
          subtopic: 'd/dx [integral_a(x)^b(x) f(t)dt] using Leibniz rule, standard algebraic trigonometric definite limits',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Derivative of definite integrals with variable limits.'
        },
        {
          name: 'Periodic Function Integrals (integral_0^nT f(x)dx = n * integral_0^T)',
          subtopic: 'Properties of functions with period T: integral_a^(a+nT) f(x)dx is independent of lower limit a',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Fractional part functions {x} and absolute trigonometric periodic integrals.'
        }
      ]
    },
    {
      chapter: 'Matrices',
      classLevel: 'Class 12',
      totalQuestions: 171,
      topics: [
        {
          name: 'Inverse of Matrix by Adjoint Method & System Equations',
          subtopic: 'A^-1 = adj(A) / |A|, |adj(A)| = |A|^(n-1), adj(adj(A)) = |A|^(n-2)*A, solving AX = B via matrix inversion',
          c22: 22, c23: 25, c24: 28, c25: 9, c26: 'N/A',
          total: 84, avgPerPaper: 2.10, paperCoverage: 95.0, subjectWeightage: 4.20,
          priority: 'Very High', uniqueQuestions: 76, totalOccurrences: 84,
          rationale: 'Rank #2 in Mathematics; high reliability adjoint determinant properties and solving linear 3x3 systems.'
        },
        {
          name: 'Elementary Row/Column Transformations & Inverse',
          subtopic: 'Row reduction to identity [A | I] -> [I | A^-1], echelon rank reduction',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 62.5, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'Transforming 2x2 and 3x3 matrices to determine singular or non-singular parameter values.'
        },
        {
          name: 'Inversion Method vs Reduction Method for Solving AX=B',
          subtopic: 'Upper triangular reduction, homogeneous systems AX = 0 condition for non-trivial solutions (|A| = 0)',
          c22: 7, c23: 8, c24: 10, c25: 3, c26: 'N/A',
          total: 28, avgPerPaper: 0.70, paperCoverage: 52.5, subjectWeightage: 1.40,
          priority: 'Moderate', uniqueQuestions: 26, totalOccurrences: 28,
          rationale: 'Unique solution, infinitely many solutions, or no solution based on determinant.'
        },
        {
          name: 'Determinant Properties & Cofactors Calculation',
          subtopic: 'Sum of products of elements with cofactors of other row is zero, symmetric and skew-symmetric matrix properties',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Determinant of skew-symmetric matrix of odd order is identically zero.'
        }
      ]
    },
    {
      chapter: 'Mathematical Logic',
      classLevel: 'Class 12',
      totalQuestions: 167,
      topics: [
        {
          name: 'Logical Equivalence, Truth Tables & Statement Negations',
          subtopic: 'De Morgan laws ~(p and q) = ~p or ~q, negation of implication ~(p -> q) = p and ~q, contrapositive (~q -> ~p)',
          c22: 21, c23: 24, c24: 27, c25: 9, c26: 'N/A',
          total: 81, avgPerPaper: 2.03, paperCoverage: 95.0, subjectWeightage: 4.05,
          priority: 'Very High', uniqueQuestions: 73, totalOccurrences: 81,
          rationale: 'Rank #3 in Mathematics; 100% scoring subtopic with formulaic truth values.'
        },
        {
          name: 'Tautology, Contradiction & Contingency Classification',
          subtopic: 'Identifying patterns that evaluate to true in all rows (tautology) or false in all rows (fallacy / contradiction)',
          c22: 10, c23: 12, c24: 13, c25: 4, c26: 'N/A',
          total: 39, avgPerPaper: 0.98, paperCoverage: 65.0, subjectWeightage: 1.95,
          priority: 'High', uniqueQuestions: 35, totalOccurrences: 39,
          rationale: 'Classification of complex conditional statement expressions.'
        },
        {
          name: 'Switching Circuits & Simplified Boolean Networks',
          subtopic: 'Series connection (p and q), parallel connection (p or q), writing switching table and equivalent simplified circuit',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Simplifying electrical switch arrangements to minimal number of single switches.'
        },
        {
          name: 'Dual Statements & Quantifiers (forall, exists)',
          subtopic: 'Replacing and with or, T with c, universal quantifier (forall) and existential quantifier (exists) negations',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Writing exact duality relations and quantifier truth values over set of natural numbers.'
        }
      ]
    },
    {
      chapter: 'Differentiation',
      classLevel: 'Class 12',
      totalQuestions: 167,
      topics: [
        {
          name: 'Derivative of Inverse Trigonometric & Parametric Forms',
          subtopic: 'Substitutions x = tan(theta), sin(theta), cos(2theta), second order parametric d^2y/dx^2 = [d/dt(dy/dx)] / (dx/dt)',
          c22: 20, c23: 23, c24: 26, c25: 8, c26: 'N/A',
          total: 77, avgPerPaper: 1.93, paperCoverage: 92.5, subjectWeightage: 3.85,
          priority: 'Very High', uniqueQuestions: 70, totalOccurrences: 77,
          rationale: 'Rank #4 in Mathematics; dy/dx when x and y are given in terms of parameter theta or t.'
        },
        {
          name: 'Logarithmic Differentiation for [f(x)]^g(x)',
          subtopic: 'y = u^v -> dy/dx = y * [v/u * du/dx + ln(u) * dv/dx], sum of variable base and variable exponent terms',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 62.5, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'Differentiating expressions like (sin x)^cos x + (cos x)^sin x.'
        },
        {
          name: 'Higher Order Derivatives (d^2y/dx^2) & Implicit Relations',
          subtopic: 'Eliminating constants in parametric relations, differential equations satisfied by y = e^(m*sin^-1 x)',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 55.0, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Second derivative values at specific coordinate points.'
        },
        {
          name: 'Derivative of Composite Functions (Chain Rule)',
          subtopic: 'dy/dx = (dy/du) * (du/dv) * (dv/dx), differentiating determinant functions with respect to x',
          c22: 6, c23: 7, c24: 8, c25: 2, c26: 'N/A',
          total: 23, avgPerPaper: 0.58, paperCoverage: 47.5, subjectWeightage: 1.15,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 23,
          rationale: 'Nested radical and logarithmic composite derivative chain rules.'
        }
      ]
    },
    {
      chapter: 'Differential Equations',
      classLevel: 'Class 12',
      totalQuestions: 164,
      topics: [
        {
          name: 'Linear Differential Equations (dy/dx + Py = Q) & I.F.',
          subtopic: 'Integrating factor IF = e^(integral P dx), general solution y * IF = integral Q * IF dx + c, Bernoulli reducible forms',
          c22: 19, c23: 22, c24: 24, c25: 8, c26: 'N/A',
          total: 73, avgPerPaper: 1.83, paperCoverage: 87.5, subjectWeightage: 3.65,
          priority: 'Very High', uniqueQuestions: 66, totalOccurrences: 73,
          rationale: 'Rank #5 in Mathematics; standard first-order linear differential equation solutions.'
        },
        {
          name: 'Variable Separable Form & Homogeneous DE',
          subtopic: 'f(y) dy = g(x) dx, homogeneous substitution y = v*x -> dy/dx = v + x*dv/dx, reducible to homogeneous',
          c22: 11, c23: 13, c24: 15, c25: 5, c26: 'N/A',
          total: 44, avgPerPaper: 1.10, paperCoverage: 70.0, subjectWeightage: 2.20,
          priority: 'High', uniqueQuestions: 40, totalOccurrences: 44,
          rationale: 'Solving differential equations where degrees of numerator and denominator are identical.'
        },
        {
          name: 'Order and Degree of Differential Equations',
          subtopic: 'Highest order derivative present (order), power of highest order derivative after making radicals and fractions free (degree)',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Quick 2-mark question; non-polynomial derivatives in sin(dy/dx) or e^(dy/dx) having undefined degree.'
        },
        {
          name: 'Population Growth & Newton’s Law of Cooling Problems',
          subtopic: 'dP/dt = k*P -> P(t) = P0 * e^(kt), dT/dt = -k*(T - T_s), bacterial growth doubling time',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Applied rate of decay and exponential growth word problems.'
        }
      ]
    },
    {
      chapter: 'Vectors',
      classLevel: 'Class 12',
      totalQuestions: 160,
      topics: [
        {
          name: 'Scalar Triple Product, Coplanarity & Volume',
          subtopic: '[a b c] = a . (b x c) determinant, coplanar condition [a b c] = 0, volume of parallelepiped V = |[a b c]|, tetrahedron V = 1/6 * |[a b c]|',
          c22: 18, c23: 21, c24: 23, c25: 7, c26: 'N/A',
          total: 69, avgPerPaper: 1.73, paperCoverage: 87.5, subjectWeightage: 3.45,
          priority: 'Very High', uniqueQuestions: 63, totalOccurrences: 69,
          rationale: 'Rank #6 in Mathematics; finding unknown parameter lambda when four points or three vectors are coplanar.'
        },
        {
          name: 'Section Formula, Dot Product & Vector Projections',
          subtopic: 'r = (m*b + n*a)/(m+n), projection of a on b = (a . b) / |b|, angle between two vectors cos(theta) = (a . b) / (|a|*|b|)',
          c22: 10, c23: 12, c24: 14, c25: 4, c26: 'N/A',
          total: 40, avgPerPaper: 1.00, paperCoverage: 65.0, subjectWeightage: 2.00,
          priority: 'High', uniqueQuestions: 36, totalOccurrences: 40,
          rationale: 'Centroid, incentre, orthocentre position vectors and orthogonal projections.'
        },
        {
          name: 'Vector Cross Product & Area of Triangle / Parallelogram',
          subtopic: 'a x b = |a||b|sin(theta) n_hat, area of triangle = 1/2 * |a x b|, area of parallelogram with diagonals d1 and d2 = 1/2 * |d1 x d2|',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 55.0, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Unit vector perpendicular to two given vectors (a x b) / |a x b|.'
        },
        {
          name: 'Linear Combination of Vectors & Collinearity',
          subtopic: 'c = x*a + y*b, linearly dependent vs linearly independent vectors, collinearity condition a = k*b',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Expressing position vectors in terms of non-coplanar basis vectors.'
        }
      ]
    },
    {
      chapter: 'Trigonometric Functions',
      classLevel: 'Class 12',
      totalQuestions: 168,
      topics: [
        {
          name: 'Principal & General Solutions of Trigonometric Equations',
          subtopic: 'Principal solutions in [0, 2pi), sin(theta) = sin(alpha) -> theta = n*pi + (-1)^n * alpha, cos(theta) = cos(alpha) -> theta = 2n*pi +- alpha, tan(theta) = tan(alpha)',
          c22: 17, c23: 20, c24: 22, c25: 7, c26: 'N/A',
          total: 66, avgPerPaper: 1.65, paperCoverage: 85.0, subjectWeightage: 3.30,
          priority: 'Very High', uniqueQuestions: 60, totalOccurrences: 66,
          rationale: 'Rank #7 in Mathematics; solving quadratic trigonometric equations and range boundary checks.'
        },
        {
          name: 'Sine Rule, Cosine Rule & Projection Rule Applications',
          subtopic: 'a/sin(A) = b/sin(B) = c/sin(C) = 2R, cos(A) = (b^2 + c^2 - a^2)/(2bc), projection a = b*cos(C) + c*cos(B), Napier analogies',
          c22: 12, c23: 14, c24: 15, c25: 5, c26: 'N/A',
          total: 46, avgPerPaper: 1.15, paperCoverage: 70.0, subjectWeightage: 2.30,
          priority: 'High', uniqueQuestions: 42, totalOccurrences: 46,
          rationale: 'Proving geometric properties and side ratios in triangle ABC.'
        },
        {
          name: 'Inverse Trigonometric Functions Properties & Domains',
          subtopic: 'Principal value branch, sin^-1(x) + cos^-1(x) = pi/2, tan^-1(x) + tan^-1(y) = tan^-1((x+y)/(1-xy)) for xy < 1',
          c22: 9, c23: 11, c24: 12, c25: 4, c26: 'N/A',
          total: 36, avgPerPaper: 0.90, paperCoverage: 62.5, subjectWeightage: 1.80,
          priority: 'High', uniqueQuestions: 33, totalOccurrences: 36,
          rationale: 'Evaluating complex multi-angle inverse trigonometric sum expressions.'
        },
        {
          name: 'Half-Angle Formulas & Hero’s Area Formula in Triangles',
          subtopic: 'sin(A/2) = sqrt((s-b)(s-c)/(bc)), cos(A/2) = sqrt(s(s-a)/(bc)), Delta = sqrt(s(s-a)(s-b)(s-c))',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Circumradius R = abc/(4Delta) and inradius r = Delta/s relations.'
        }
      ]
    },
    {
      chapter: 'Three Dimensional Geometry',
      classLevel: 'Class 12',
      totalQuestions: 153,
      topics: [
        {
          name: 'Shortest Distance Between Two Skew Lines & Line Equations',
          subtopic: 'd = |(a2 - a1) . (b1 x b2)| / |b1 x b2|, condition of intersection (coplanarity), parallel lines distance d = |(a2 - a1) x b| / |b|',
          c22: 17, c23: 19, c24: 21, c25: 7, c26: 'N/A',
          total: 64, avgPerPaper: 1.60, paperCoverage: 82.5, subjectWeightage: 3.20,
          priority: 'Very High', uniqueQuestions: 58, totalOccurrences: 64,
          rationale: 'Rank #8 in Mathematics; standard skew line formula tested with vector and cartesian coordinates.'
        },
        {
          name: 'Direction Cosines & Angle Between Direction Ratios',
          subtopic: 'l^2 + m^2 + n^2 = 1, l = a/sqrt(a^2+b^2+c^2), cos(theta) = (a1*a2 + b1*b2 + c1*c2)/(sqrt(sum a1^2)*sqrt(sum a2^2)), perpendicular condition a1*a2 + b1*b2 + c1*c2 = 0',
          c22: 10, c23: 11, c24: 13, c25: 4, c26: 'N/A',
          total: 38, avgPerPaper: 0.95, paperCoverage: 62.5, subjectWeightage: 1.90,
          priority: 'High', uniqueQuestions: 35, totalOccurrences: 38,
          rationale: 'Finding direction ratios of lines passing through two given points in 3D.'
        },
        {
          name: 'Vector & Cartesian Equations of Straight Lines',
          subtopic: 'r = a + lambda*b, (x - x1)/a = (y - y1)/b = (z - z1)/c, line through two points (x - x1)/(x2 - x1) = ...',
          c22: 8, c23: 9, c24: 11, c25: 3, c26: 'N/A',
          total: 31, avgPerPaper: 0.78, paperCoverage: 55.0, subjectWeightage: 1.55,
          priority: 'High', uniqueQuestions: 29, totalOccurrences: 31,
          rationale: 'Coordinates of a general point on a line at distance r from given base point.'
        },
        {
          name: 'Perpendicular Distance & Foot of Perpendicular from Point to Line',
          subtopic: 'Coordinates of foot of perpendicular P on line, image of point in given straight line',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Equating dot product of line direction with perpendicular vector to zero.'
        }
      ]
    },
    {
      chapter: 'Applications of Derivatives',
      classLevel: 'Class 12',
      totalQuestions: 167,
      topics: [
        {
          name: 'Tangent & Normal Equations to Curves',
          subtopic: 'Slope m = (dy/dx)_(x1,y1), tangent y - y1 = m*(x - x1), normal y - y1 = (-1/m)*(x - x1), angle of intersection of curves',
          c22: 16, c23: 18, c24: 21, c25: 6, c26: 'N/A',
          total: 61, avgPerPaper: 1.53, paperCoverage: 80.0, subjectWeightage: 3.05,
          priority: 'Very High', uniqueQuestions: 55, totalOccurrences: 61,
          rationale: 'Rank #9 in Mathematics; finding points on curve where tangent is parallel to coordinate axes.'
        },
        {
          name: 'Maxima and Minima (First & Second Derivative Tests)',
          subtopic: 'f\'(x) = 0 critical points, f\'\'(x) < 0 (local maximum), f\'\'(x) > 0 (local minimum), optimization word problems',
          c22: 15, c23: 17, c24: 19, c25: 6, c26: 'N/A',
          total: 57, avgPerPaper: 1.43, paperCoverage: 77.5, subjectWeightage: 2.85,
          priority: 'Very High', uniqueQuestions: 52, totalOccurrences: 57,
          rationale: 'Rank #11 in Mathematics; finding dimensions of rectangle or box of maximum volume from given sheet.'
        },
        {
          name: 'Rate of Measure of Quantities (Velocity, Sphere Inflation)',
          subtopic: 'dV/dt = 4*pi*r^2 * dr/dt for expanding balloon, ladder sliding down wall (dy/dt = -x/y * dx/dt)',
          c22: 7, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 29, avgPerPaper: 0.73, paperCoverage: 55.0, subjectWeightage: 1.45,
          priority: 'High', uniqueQuestions: 27, totalOccurrences: 29,
          rationale: 'Time derivatives of geometric formulas connecting related rates.'
        },
        {
          name: 'Rolle’s Theorem & Lagrange’s Mean Value Theorem (LMVT)',
          subtopic: 'f\'(c) = 0 for Rolle on [a, b], f\'(c) = (f(b) - f(a))/(b - a) for LMVT, finding c in (a, b)',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Verifying differentiability conditions and computing c in algebraic polynomials.'
        }
      ]
    },
    {
      chapter: 'Pair of Straight Lines',
      classLevel: 'Class 12',
      totalQuestions: 133,
      topics: [
        {
          name: 'Homogeneous 2nd Degree Equations & Angle Between Lines',
          subtopic: 'ax^2 + 2hxy + by^2 = 0, tan(theta) = |2*sqrt(h^2 - ab) / (a + b)|, perpendicular condition a + b = 0, coincident h^2 = ab',
          c22: 15, c23: 18, c24: 20, c25: 6, c26: 'N/A',
          total: 59, avgPerPaper: 1.48, paperCoverage: 80.0, subjectWeightage: 2.95,
          priority: 'Very High', uniqueQuestions: 53, totalOccurrences: 59,
          rationale: 'Rank #10 in Mathematics; sum of slopes m1 + m2 = -2h/b and product m1*m2 = a/b.'
        },
        {
          name: 'General 2nd Degree Condition for Pair of Straight Lines',
          subtopic: 'Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0, point of intersection ((hf - bg)/(ab - h^2), (gh - af)/(ab - h^2))',
          c22: 9, c23: 10, c24: 12, c25: 3, c26: 'N/A',
          total: 34, avgPerPaper: 0.85, paperCoverage: 60.0, subjectWeightage: 1.70,
          priority: 'High', uniqueQuestions: 31, totalOccurrences: 34,
          rationale: 'Finding unknown parameter p so that equation represents a pair of straight lines.'
        },
        {
          name: 'Joint Equation of Bisectors of Angles Between Lines',
          subtopic: '(x^2 - y^2) / (a - b) = xy / h, perpendicular angle bisectors passing through origin',
          c22: 6, c23: 8, c24: 8, c25: 2, c26: 'N/A',
          total: 24, avgPerPaper: 0.60, paperCoverage: 47.5, subjectWeightage: 1.20,
          priority: 'Moderate', uniqueQuestions: 22, totalOccurrences: 24,
          rationale: 'Combined equation of angle bisectors and triangle area formed with transversal.'
        },
        {
          name: 'Auxiliary Equation & Line Slopes Relations',
          subtopic: 'bm^2 + 2hm + a = 0, relations when one slope is k times other or slopes differ by constant',
          c22: 5, c23: 6, c24: 7, c25: 2, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 42.5, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Slope constraints m1 = 3*m2 or m1 + m2 = 0 in homogeneous pairs.'
        }
      ]
    },

    // --- CLASS 11 CHAPTERS (20% Weightage) ---
    {
      chapter: 'Trigonometry II (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 95,
      topics: [
        {
          name: 'Compound Angles, Double Angle & Triple Angle Formulas',
          subtopic: 'sin(A +- B), cos(A +- B), tan(A +- B), sin(2A) = 2tanA/(1+tan^2A), cos(2A) = (1-tan^2A)/(1+tan^2A), sin(3A) = 3sinA - 4sin^3A',
          c22: 12, c23: 13, c24: 15, c25: 4, c26: 'N/A',
          total: 44, avgPerPaper: 1.10, paperCoverage: 70.0, subjectWeightage: 2.20,
          priority: 'High', uniqueQuestions: 40, totalOccurrences: 44,
          rationale: 'Essential foundation for Class 12 differentiation and indefinite integration.'
        },
        {
          name: 'Transformation Formulas (Sum into Product & Product into Sum)',
          subtopic: 'sin C + sin D = 2 sin((C+D)/2) cos((C-D)/2), 2 sin A cos B = sin(A+B) + sin(A-B)',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Simplifying multi-term trigonometric products like cos(20) cos(40) cos(80) = 1/8.'
        },
        {
          name: 'Conditional Identities in Triangle ABC',
          subtopic: 'If A + B + C = pi, then tan A + tan B + tan C = tan A tan B tan C, sin 2A + sin 2B + sin 2C = 4 sin A sin B sin C',
          c22: 5, c23: 6, c24: 7, c25: 3, c26: 'N/A',
          total: 21, avgPerPaper: 0.53, paperCoverage: 45.0, subjectWeightage: 1.05,
          priority: 'Moderate', uniqueQuestions: 20, totalOccurrences: 21,
          rationale: 'Standard identities tested under angle sum condition A + B + C = 180 degrees.'
        }
      ]
    },
    {
      chapter: 'Straight Lines (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 92,
      topics: [
        {
          name: 'Distance Between Parallel Lines & Perpendicular Distance',
          subtopic: 'd = |c1 - c2| / sqrt(a^2 + b^2), perpendicular distance from (x1, y1) to ax + by + c = 0 is |ax1 + by1 + c| / sqrt(a^2 + b^2)',
          c22: 11, c23: 13, c24: 14, c25: 4, c26: 'N/A',
          total: 42, avgPerPaper: 1.05, paperCoverage: 67.5, subjectWeightage: 2.10,
          priority: 'High', uniqueQuestions: 38, totalOccurrences: 42,
          rationale: 'Consistently tested straight lines geometry problem.'
        },
        {
          name: 'Slope Point, Two Point & Normal Forms of Line',
          subtopic: 'y - y1 = m(x - x1), x/a + y/b = 1 intercept form, x cos(alpha) + y sin(alpha) = p normal form',
          c22: 8, c23: 9, c24: 10, c25: 3, c26: 'N/A',
          total: 30, avgPerPaper: 0.75, paperCoverage: 55.0, subjectWeightage: 1.50,
          priority: 'High', uniqueQuestions: 28, totalOccurrences: 30,
          rationale: 'Equation of line passing through intersection of two given lines.'
        },
        {
          name: 'Angle Between Two Lines & Collinear Concurrence',
          subtopic: 'tan(theta) = |(m1 - m2) / (1 + m1*m2)|, condition of concurrency of three lines determinant = 0',
          c22: 5, c23: 6, c24: 6, c25: 3, c26: 'N/A',
          total: 20, avgPerPaper: 0.50, paperCoverage: 40.0, subjectWeightage: 1.00,
          priority: 'Moderate', uniqueQuestions: 19, totalOccurrences: 20,
          rationale: 'Lines parallel (m1 = m2) or perpendicular (m1*m2 = -1).'
        }
      ]
    },
    {
      chapter: 'Circle and Conics (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 111,
      topics: [
        {
          name: 'Standard Circle: Centre, Radius & Tangent Condition',
          subtopic: 'x^2 + y^2 + 2gx + 2fy + c = 0, centre (-g, -f), radius r = sqrt(g^2 + f^2 - c), condition of tangency c^2 = a^2*(1 + m^2)',
          c22: 12, c23: 14, c24: 15, c25: 5, c26: 'N/A',
          total: 46, avgPerPaper: 1.15, paperCoverage: 72.5, subjectWeightage: 2.30,
          priority: 'High', uniqueQuestions: 42, totalOccurrences: 46,
          rationale: 'Finding tangent and normal equations to circle at given boundary point.'
        },
        {
          name: 'Parabola: Focus, Directrix, Latus Rectum & Parametric',
          subtopic: 'y^2 = 4ax, focus (a, 0), directrix x = -a, latus rectum = 4a, parametric (at^2, 2at), tangent y = mx + a/m',
          c22: 10, c23: 11, c24: 13, c25: 4, c26: 'N/A',
          total: 38, avgPerPaper: 0.95, paperCoverage: 65.0, subjectWeightage: 1.90,
          priority: 'High', uniqueQuestions: 35, totalOccurrences: 38,
          rationale: 'Standard focal chord properties and intersections with straight lines.'
        },
        {
          name: 'Ellipse & Hyperbola: Eccentricity & Standard Tangents',
          subtopic: 'Ellipse e = sqrt(1 - b^2/a^2), hyperbola e = sqrt(1 + b^2/a^2), foci (+-ae, 0), directrices x = +-a/e, rectangular hyperbola e = sqrt(2)',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Computing length of major and minor axes and eccentricity ratios.'
        }
      ]
    },
    {
      chapter: 'Probability & Dispersion (Class 11)',
      classLevel: 'Class 11',
      totalQuestions: 88,
      topics: [
        {
          name: 'Conditional Probability & Multiplication Theorem',
          subtopic: 'P(A|B) = P(A and B) / P(B), independent events P(A and B) = P(A)*P(B), P(A or B) = P(A) + P(B) - P(A and B)',
          c22: 11, c23: 13, c24: 14, c25: 4, c26: 'N/A',
          total: 42, avgPerPaper: 1.05, paperCoverage: 67.5, subjectWeightage: 2.10,
          priority: 'High', uniqueQuestions: 38, totalOccurrences: 42,
          rationale: 'Direct probability problems with dice, cards, and mutually exclusive events.'
        },
        {
          name: 'Variance, Standard Deviation & Coefficient of Variation',
          subtopic: 'Variance sigma^2 = sum(x_i - x_bar)^2 / N = (sum x_i^2 / N) - x_bar^2, CV = (sigma / x_bar) * 100%, consistency of data',
          c22: 7, c23: 8, c24: 9, c25: 3, c26: 'N/A',
          total: 27, avgPerPaper: 0.68, paperCoverage: 52.5, subjectWeightage: 1.35,
          priority: 'Moderate', uniqueQuestions: 25, totalOccurrences: 27,
          rationale: 'Effect on mean and variance when each observation is multiplied or added by constant k.'
        },
        {
          name: 'Bayes’ Theorem & Law of Total Probability',
          subtopic: 'P(E_i|A) = [P(E_i)*P(A|E_i)] / sum[P(E_j)*P(A|E_j)], selection of bag and drawing defective item',
          c22: 5, c23: 5, c24: 6, c25: 3, c26: 'N/A',
          total: 19, avgPerPaper: 0.48, paperCoverage: 40.0, subjectWeightage: 0.95,
          priority: 'Moderate', uniqueQuestions: 18, totalOccurrences: 19,
          rationale: 'Reverse conditional probability calculations.'
        }
      ]
    }
  ]
};
