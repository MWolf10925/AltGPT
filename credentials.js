// Hardcoded credentials
const hardcodedCredentials = [
    { username: 'quantum_nexus', password: 'x7k9m2p4r1', studentName: 'Student 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'stellar_flare', password: 'q5w8e3r7t9', studentName: 'Student 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'cosmic_dream', password: 'a2s4d6f8g0', studentName: 'Student 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'neon_pulse', password: 'z1x3c5v7b9', studentName: 'Student 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'cyber_phoenix', password: 'n8m6k4j2h0', studentName: 'Student 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'nova_spark', password: 'l9p7o5i3u1', studentName: 'Student 6', isActive: true, createdDate: new Date().toISOString() },
    { username: 'quantum_echo', password: 'y4t6r8e0w2', studentName: 'Student 7', isActive: true, createdDate: new Date().toISOString() },
    { username: 'stellar_void', password: 'u7i9o0p2l4', studentName: 'Student 8', isActive: true, createdDate: new Date().toISOString() },
    { username: 'cosmic_flow', password: 'h6j8k0l2m4', studentName: 'Student 9', isActive: true, createdDate: new Date().toISOString() },
    { username: 'neon_wave', password: 'b5v7c9x1z3', studentName: 'Student 10', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student1', password: 'orbitSun92!', studentName: 'Student 11', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2', password: 'blueBerry!88', studentName: 'Student 12', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student3', password: 'giraffeSk8r@', studentName: 'Student 13', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student4', password: 'lavaRide@13', studentName: 'Student 14', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student5', password: 'quartzPine4$', studentName: 'Student 15', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student6', password: 'zebraSnap34!', studentName: 'Student 16', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student7', password: 'stormJet$76', studentName: 'Student 17', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student8', password: 'pixelGlow33!', studentName: 'Student 18', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student9', password: 'shardMoon!19', studentName: 'Student 19', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student10', password: 'kiwiWave92$', studentName: 'Student 20', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studybuddy1', password: 'toastMaze77!', studentName: 'Study Buddy 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studybuddy2', password: 'foxVortex@55', studentName: 'Study Buddy 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studybuddy3', password: 'aquaDance91$', studentName: 'Study Buddy 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studybuddy4', password: 'rapidLemon3!', studentName: 'Study Buddy 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studybuddy5', password: 'plutoLeaf98@', studentName: 'Study Buddy 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academic1', password: 'mintBlast64!', studentName: 'Academic Student 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academic2', password: 'wheatCode32$', studentName: 'Academic Student 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academic3', password: 'ironBugle88!', studentName: 'Academic Student 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academic4', password: 'koiLight77@', studentName: 'Academic Student 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academic5', password: 'deltaPath43$', studentName: 'Academic Student 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'scholar1', password: 'ghostLime01!', studentName: 'Scholar 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'scholar2', password: 'venusSkater88$', studentName: 'Scholar 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'scholar3', password: 'chalkNova56@', studentName: 'Scholar 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'scholar4', password: 'shadeTiger99$', studentName: 'Scholar 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'scholar5', password: 'echoDrift13!', studentName: 'Scholar 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'learner1', password: 'sparkZebra9$', studentName: 'Learner 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'learner2', password: 'orbitFish77!', studentName: 'Learner 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'learner3', password: 'glowTundra5@', studentName: 'Learner 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'learner4', password: 'sunnyTrack90$', studentName: 'Learner 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'learner5', password: 'mapleDive72!', studentName: 'Learner 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2024', password: 'gradSkyline24$', studentName: 'Graduate 2024', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2025', password: 'gradWaffle25@', studentName: 'Graduate 2025', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2026', password: 'gradEchoSnap26!', studentName: 'Graduate 2026', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2027', password: 'gradMoonRush27$', studentName: 'Graduate 2027', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2028', password: 'gradFireTape28!', studentName: 'Graduate 2028', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studyhelper1', password: 'blazeCube49@', studentName: 'Study Helper 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studyhelper2', password: 'featherJam85$', studentName: 'Study Helper 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studyhelper3', password: 'noteStorm19!', studentName: 'Study Helper 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studyhelper4', password: 'cloudMaze72$', studentName: 'Study Helper 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studyhelper5', password: 'orbitWhale31@', studentName: 'Study Helper 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academics1', password: 'dashFlame13$', studentName: 'Academics Student 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academics2', password: 'neonTwist44!', studentName: 'Academics Student 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academics3', password: 'quasarHill82$', studentName: 'Academics Student 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academics4', password: 'cherryBeam95!', studentName: 'Academics Student 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'academics5', password: 'codeLava73$', studentName: 'Academics Student 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studymate1', password: 'flintBoop77$', studentName: 'Study Mate 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studymate2', password: 'puzzleBark12!', studentName: 'Study Mate 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studymate3', password: 'jungleZap30@', studentName: 'Study Mate 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studymate4', password: 'snapDrift91$', studentName: 'Study Mate 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studymate5', password: 'cometBurst68!', studentName: 'Study Mate 5', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2023', password: 'yearDelta23$', studentName: 'Graduate 2023', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2022', password: 'yearMint22!', studentName: 'Graduate 2022', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2021', password: 'yearToast21@', studentName: 'Graduate 2021', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2020', password: 'yearBuzz20$', studentName: 'Graduate 2020', isActive: true, createdDate: new Date().toISOString() },
    { username: 'student2019', password: 'yearFlare19!', studentName: 'Graduate 2019', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studygroup1', password: 'groupSalsa39$', studentName: 'Study Group 1', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studygroup2', password: 'groupCloud56!', studentName: 'Study Group 2', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studygroup3', password: 'groupJade73@', studentName: 'Study Group 3', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studygroup4', password: 'groupNova90$', studentName: 'Study Group 4', isActive: true, createdDate: new Date().toISOString() },
    { username: 'studygroup5', password: 'groupSnap62!', studentName: 'Study Group 5', isActive: true, createdDate: new Date().toISOString() }
];

// Credentials management system
class CredentialsManager {
    constructor() {
        // Initialize credentials array
        this.credentials = [];
        
        // Initialize valid credentials set
        this.validCredentials = new Set();
        
        // Initialize the credentials
        this.initializeCredentials();
        
        // Save to localStorage
        this.saveCredentials();
        
        // Debug: Log all credentials
        console.log('Initialized credentials:', this.credentials);
        console.log('Valid usernames:', Array.from(this.validCredentials));
    }
    
    initializeCredentials() {
        // Add test credentials
        this.addCredential('testuser1', 'testpass1');
        this.addCredential('testuser2', 'testpass2');
        this.addCredential('testuser3', 'testpass3');
        
        // Add proper student credentials
        hardcodedCredentials.forEach(cred => {
            this.addCredential(cred.username, cred.password);
            console.log('Added student credential:', cred.username);
        });
    }
    
    addCredential(username, password) {
        const credential = { username, password };
        this.credentials.push(credential);
        this.validCredentials.add(username);
        console.log('Added credential:', credential);
    }
    
    saveCredentials() {
        localStorage.setItem('credentials', JSON.stringify(this.credentials));
        console.log('Saved credentials to localStorage:', this.credentials);
    }
    
    validateLogin(username, password) {
        console.log('Validating login for:', username);
        console.log('Available credentials:', this.credentials);
        
        const credential = this.credentials.find(cred => 
            cred.username === username && cred.password === password
        );
        
        console.log('Found credential:', credential);
        return !!credential;
    }

    // Generate a new set of credentials
    generateCredentials(studentName) {
        const username = this.generateUsername();
        const password = this.generatePassword();

        const credential = {
            username,
            password,
            studentName,
            isActive: true,
            createdDate: new Date().toISOString()
        };

        this.credentials.push(credential);
        this.validCredentials.add(username);
        this.saveCredentials();
        return credential;
    }

    // Generate a random username
    generateUsername() {
        const prefix = 'student';
        let username;
        do {
            username = `${prefix}_${Math.random().toString(36).substr(2, 8)}`;
        } while (this.validCredentials.has(username));
        return username;
    }

    // Generate a random password
    generatePassword() {
        return Math.random().toString(36).substr(2, 10);
    }

    // Export credentials to CSV
    exportToCSV() {
        const headers = ['Student Name', 'Username', 'Password', 'Status'];
        const rows = this.credentials.map(c => [
            c.studentName,
            c.username,
            c.password,
            c.isActive ? 'Active' : 'Inactive'
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `altgpt_credentials_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Deactivate a credential
    deactivateCredential(username) {
        const credential = this.credentials.find(c => c.username === username);
        if (credential) {
            credential.isActive = false;
            this.saveCredentials();
        }
    }

    // Get all active credentials
    getActiveCredentials() {
        return this.credentials.filter(c => c.isActive);
    }
}

// Create a global instance
const credentialsManager = new CredentialsManager(); 