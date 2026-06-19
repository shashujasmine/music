

'use strict';


const KEYS = {
    USERS: 'groovehub_users',
    SESSION: 'groovehub_session',
};


function simpleHash(str) {
    let hash = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
        hash ^= str.charCodeAt(i);
        hash = (hash * 0x01000193) >>> 0;
    }
    return hash.toString(16).padStart(8, '0');
}


function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(KEYS.USERS) || '[]');
    } catch { return []; }
}

function saveUsers(users) {
    localStorage.setItem(KEYS.USERS, JSON.stringify(users));
}

function findUser(email) {
    return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}


function getSession() {
    try {
        return JSON.parse(localStorage.getItem(KEYS.SESSION) || 'null');
    } catch { return null; }
}

function setSession(user, remember) {
    const session = {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar || null,
        loginTime: Date.now(),
        remember: remember,
    };
    localStorage.setItem(KEYS.SESSION, JSON.stringify(session));

    if (!remember) sessionStorage.setItem(KEYS.SESSION, JSON.stringify(session));
}

function clearSession() {
    localStorage.removeItem(KEYS.SESSION);
    sessionStorage.removeItem(KEYS.SESSION);
}


function isLoggedIn() {
    const session = getSession();
    if (!session) return false;
    if (!session.remember) {
        const ss = sessionStorage.getItem(KEYS.SESSION);
        if (!ss) { clearSession(); return false; }
    }
    return true;
}


function getCurrentUser() {
    return getSession();
}


function logoutUser() {
    clearSession();
    window.location.href = 'auth.html';
}


function registerUser(name, email, password) {
    const users = getUsers();
    if (findUser(email)) {
        return { ok: false, message: 'An account with this email already exists.' };
    }
    const newUser = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36),
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: simpleHash(password),
        avatar: null,
        createdAt: Date.now(),
    };
    users.push(newUser);
    saveUsers(users);
    return { ok: true, user: newUser };
}


function loginUser(email, password, remember) {
    const user = findUser(email);
    if (!user) {
        return { ok: false, message: 'No account found with this email address.' };
    }
    if (user.password !== simpleHash(password)) {
        return { ok: false, message: 'Incorrect password. Please try again.' };
    }
    setSession(user, remember);
    return { ok: true, user };
}


function getPasswordStrength(pw) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (pw.length >= 12) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    if (score <= 1) return { level: 0, label: 'Very Weak', color: '#ff5566', pct: 15 };
    if (score === 2) return { level: 1, label: 'Weak', color: '#ff9900', pct: 35 };
    if (score === 3) return { level: 2, label: 'Fair', color: '#f5c518', pct: 60 };
    if (score === 4) return { level: 3, label: 'Strong', color: '#22c663', pct: 80 };
    return { level: 4, label: 'Very Strong', color: '#00e676', pct: 100 };
}


if (window.location.pathname.endsWith('auth.html') || window.location.pathname === '/') {
    if (isLoggedIn()) {
        window.location.href = 'index.html';
    }
}


function switchTab(tab) {
    const isLogin = tab === 'login';

    document.getElementById('tab-login').classList.toggle('active', isLogin);
    document.getElementById('tab-signup').classList.toggle('active', !isLogin);
    document.getElementById('panel-login').classList.toggle('active', isLogin);
    document.getElementById('panel-signup').classList.toggle('active', !isLogin);

    document.getElementById('tab-login').setAttribute('aria-selected', isLogin);
    document.getElementById('tab-signup').setAttribute('aria-selected', !isLogin);

    hideAlert();
}


function showAlert(message, type = 'error') {
    const box = document.getElementById('auth-alert');
    const text = document.getElementById('alert-text');
    const icon = box.querySelector('i');

    box.className = 'auth-alert ' + type;
    icon.className = type === 'error'
        ? 'fas fa-circle-exclamation'
        : 'fas fa-circle-check';
    text.textContent = message;
}

function hideAlert() {
    const box = document.getElementById('auth-alert');
    box.className = 'auth-alert';
}


function setLoading(id, loading) {
    const btn = document.getElementById(id + '-btn');
    const spinner = document.getElementById(id + '-spinner');
    const icon = document.getElementById(id + '-icon');
    const text = document.getElementById(id + '-text');

    btn.disabled = loading;
    spinner.style.display = loading ? 'block' : 'none';
    icon.style.display = loading ? 'none' : 'inline';
    text.textContent = loading
        ? (id === 'login' ? 'Signing in…' : 'Creating account…')
        : (id === 'login' ? 'Sign In' : 'Create Account');
}


function togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector('i');
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    icon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
}


function checkStrength(value) {
    const container = document.getElementById('pw-strength');
    const fill = document.getElementById('strength-fill');
    const label = document.getElementById('strength-text');

    if (!value) {
        container.classList.remove('visible');
        return;
    }
    container.classList.add('visible');

    const strength = getPasswordStrength(value);
    fill.style.width = strength.pct + '%';
    fill.style.background = strength.color;
    label.textContent = strength.label;
    label.style.color = strength.color;
}


function showForgot(e) {
    e.preventDefault();
    showAlert(
        'Password reset: enter your registered email above, then contact support or re-register.',
        'error'
    );
}


function googleSignIn() {
    showAlert('Google Sign-In requires Firebase setup. Use email/password for now.', 'error');
}


function fakeAsync(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}


document.getElementById('login-form')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    hideAlert();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const remember = document.getElementById('remember-me').checked;

    if (!email) { showAlert('Please enter your email address.'); return; }
    if (!validateEmail(email)) { showAlert('Please enter a valid email address.'); return; }
    if (!password) { showAlert('Please enter your password.'); return; }

    setLoading('login', true);
    await fakeAsync(700);

    const result = loginUser(email, password, remember);
    setLoading('login', false);

    if (!result.ok) {
        showAlert(result.message);
        return;
    }

    showAlert('Welcome back, ' + result.user.name + '! Redirecting…', 'success');
    setTimeout(() => { window.location.href = 'index.html'; }, 900);
});


document.getElementById('signup-form')?.addEventListener('submit', async function (e) {
    e.preventDefault();
    hideAlert();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;

    if (!name) { showAlert('Please enter your full name.'); return; }
    if (name.length < 2) { showAlert('Name must be at least 2 characters.'); return; }
    if (!email) { showAlert('Please enter your email address.'); return; }
    if (!validateEmail(email)) { showAlert('Please enter a valid email address.'); return; }
    if (!password) { showAlert('Please create a password.'); return; }
    if (password.length < 6) { showAlert('Password must be at least 6 characters.'); return; }
    if (password !== confirm) { showAlert('Passwords do not match. Please try again.'); return; }

    const strength = getPasswordStrength(password);
    if (strength.level < 1) {
        showAlert('Password is too weak. Add numbers or special characters.'); return;
    }

    setLoading('signup', true);
    await fakeAsync(800);

    const result = registerUser(name, email, password);
    setLoading('signup', false);

    if (!result.ok) {
        showAlert(result.message);
        return;
    }


    loginUser(email, password, false);
    showAlert('Account created! Welcome to GrooveHub 🎵', 'success');
    setTimeout(() => { window.location.href = 'index.html'; }, 900);
});
