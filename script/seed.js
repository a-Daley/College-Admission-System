'use strict'

const db = require('../server/db')
const {Profile} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const profiles = await Promise.all([
    Profile.create({
      collegeTier: 'elite college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        "Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        "Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Black/African-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college. Still, you are likely earning nearly 17 % less per hour, on average, than your white peers and you're also more likely to have taken out loans (about 78% of African-American students do) and to default on those loans. This is true, whether you attended an elite school, a state college, community college, online college. But you're not alone.After all, 44 million Americans owe over $1 .4 trillion in student debt.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed.After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.' Still, if your alma mater is a flagship public school, then as a white male, you're likely to earn 20 percent more over time than your white male peers who attended less selective colleges.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent. In fact, if your alma mater is a flagship public school, then as a white male, you're likely to earn 20 percent more over time than your white male peers who attended less selective colleges.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "If your alma mater is a flagship public school, then as a white male, you're likely to earn 20 percent more over time than your white male peers who attended less selective colleges.",

      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",

      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'White/Caucasian',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Native American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'After graduating, you have a much higher chance than your friends who went to public colleges of making your way to the top 1 % income - wise.That especially applies if you graduated from Columbia University, where, one study found that students in the bottom 15 % of income distribution entered that exclusive club, compared with just 2 percent at Stony Brook University.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'elite college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you likely move 700 miles away from your university. In fact, almost 40% of grads of elite private colleges end up over 500 miles from the university.',
      stage2:
        "Attending an elite college didn't affect your income mobility much. You already had a strong start.",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",

      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        "Graduating from a public university makes you part of a dwindling group.According the New York Times, 'the share of lower-income students at many public colleges has fallen somewhat over the last 15 years,'largely due to a decrease in state funding for higher ed.While there 's no guarantee that your post-college earnings will boost you into the top 1% but you have a better chance than your peers if you attended one of the colleges in the City University of New York network, the University of California network or the University of Texas network.'",
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'state university',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within state lines, living about 330 miles away from your university. You might even be within 50 miles of your alma mater, like 40% of grads.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'community college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        'After graduating, you stay within 300 miles of your college, mostly likely within 50 miles of your college like 61% of your peers who attended community college.',
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'male',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'working',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60%, of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'middle',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Hispanic/Latino',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    }),

    Profile.create({
      collegeTier: 'online college',
      race: 'Pacific Islander/Asian-American',
      age: ['20', '30', '40', '50', '60', '70'],
      gender: 'female',
      income: 'upper',
      stage1:
        "After graduating, you're likely to live almost anywhere in the U.S., probably more than 500 miles away from your alma mater's main campus like more than 60% of your peers who attended an online college.",
      stage2:
        'You are most likely gainfully employed. After all, the employment rate for college grads is 2.1 percent compared to the current national average of 3.8 percent.',
      stage3:
        "No matter what kind of school you attended, you 're likely healthier than your peers who didn't attend college. According to a study from The National Bureau of Economic Research, college graduates report having health that is“ good” or“ very good” 44 percent more than their non - graduate peers do.They are also nearly 'four times less likely than to smoke, more likely to exercise, wear a seat belt, maintain a healthy weight, and regularly see a doctor.'It 's no surprise then that as a college graduate, you're likely to have a life expectancy of seven years longer than those who hold a high school diploma or less."
    })
  ])

  console.log(`seeded ${profiles.length} profiles`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
