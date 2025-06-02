// Timely: Countdown Timer
function startCountdown() {
    const endDate = new Date("2026-02-28T23:59:59").getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timely-banner").innerHTML = "<h2>Offer Expired!</h2>";
        }
    }, 1000);
}

// Easy: Form Progress
let currentStep = 1;
function nextStep(step) {
    document.getElementById(`step-${currentStep}`).style.display = "none";
    currentStep = step;
    document.getElementById(`step-${currentStep}`).style.display = "block";
    document.getElementById("progress").style.width = `${(currentStep / 3) * 100}%`;
}

function saveAndContinue() {
    alert("Your progress has been saved! We'll remind you to continue later.");
}

// Attractive: Claim Reward Animation
function claimReward() {
    alert("🎉 Congratulations! You've claimed your R93 welcome bonus!");
}

// Social: Share Referral (Placeholder)
function shareReferral() {
    alert("Share this link with your friends: standardbank.com/refer-a-friend");
    // In a real app, this would open WhatsApp/Instagram with a pre-filled message
    document.getElementById("referral-count").innerHTML = parseInt(document.getElementById("referral-count").innerHTML) + 1;
}

// Start the countdown when the page loads
window.onload = startCountdown;