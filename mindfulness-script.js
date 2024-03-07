const quotes = [
  { "quote": "Mindfulness means being awake. It means knowing what you are doing.", "author": "Jon Kabat-Zinn" },
  { "quote": "To produce at your peak level, you need to work for extended periods with full concentration on a single task free from distraction.", "author": "Cal Newport" },
  { "quote": "Be where you are; otherwise, you will miss your life.", "author": "Buddha" },
  { "quote": "Time isn't precious at all, because it is an illusion. What you perceive as precious is not time but the one point that is out of time: the Now. That is precious indeed. The more you are focused on time — past and future — the more you miss the Now, the most precious thing there is.", "author": "Eckhart Tolle" },
  { "quote": "Life gives you plenty of time to do whatever you want to do if you stay in the present moment.", "author": "Deepak Chopra" },
  { "quote": "Sometimes, when you have a very long street ahead of you, you think how terribly long it is and feel sure you'll never get it swept. And then you start to hurry. [...] You must only concentrate on the next step, the next breath, the next stroke of the broom, and the next, and the next. Nothing else. That way you enjoy your work, which is important, because then you make a good job of it. And that's how it ought to be.", "author": "Michael Ende" },
  { "quote": "Mindfulness gives you time. Time gives you choices. Choices, skillfully made, lead to freedom.", "author": "Bhante Henepola Gunaratana" },
  { "quote": "How we pay attention to the present moment largely determines the character of our experience, and therefore, the quality of our lives.", "author": "Sam Harris" },
  { "quote": "Breathing in, I calm body and mind. Breathing out, I smile. Dwelling in the present moment I know this is the only moment.", "author": "Thich Nhat Hanh" },
  { "quote": "Peace comes from within. Do not seek it without.", "author": "Buddha" },
  { "quote": "You can't stop the waves, but you can learn to surf.", "author": "Jon Kabat-Zinn" },
  { "quote": "If you want to conquer the anxiety of life, live in the moment, live in the breath.", "author": "Amit Ray" },
  { "quote": "Just when you feel you have no time to relax, know this is the moment you most need to relax.", "author": "Matt Haig" },
  { "quote": "If a problem is fixable, if a situation is such that you can do something about it, then there is no need to worry. If it's not fixable, then there is no help in worrying. There is no benefit in worrying whatsoever.", "author": "Dalai Lama" },
  { "quote": "We spend precious hours fearing the inevitable. It would be wise to use that time adoring our families, cherishing our friends and living our lives.", "author": "Maya Angelou" },
  { "quote": "Nowhere can man find a quieter or more untroubled retreat than in his own soul.", "author": "Marcus Aurelius" },
  { "quote": "Best advice ever received was from one of my meditation teachers at the monastery: Be present, be patient, be gentle, be kind...everything else will take care of itself.", "author": "Andy Puddicombe" },
  { "quote": "If it's out of your hands, it deserves freedom from your mind too.", "author": "Ivan Nuru" },
  { "quote": "When you're quiet, everything settles on the floor of your mind like sediment in undisturbed still water.", "author": "Megan Monahan" },
  { "quote": "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.", "author": "Victor Frankl" },
  { "quote": "Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today.", "author": "Thich Nhat Hanh" },
  { "quote": "Breathe in the good shit. Breathe out the bullshit.", "author": "Karen Salmansohn" },
  { "quote": "Remember that sometimes not getting what you want is a wonderful stroke of luck.", "author": "Dalai Lama" },
  { "quote": "To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is.", "author": "Thich Nhat Hanh" },
  { "quote": "Every experience, no matter how bad it seems, holds within it a blessing of some kind. The goal is to find it.", "author": "Buddha" },
    { "quote": "No one can hurt me without my permission.", "author": "Mahatma Gandhi" },
    { "quote": "And when the broken-hearted people living in the world agree, there will be an answer, let it be.", "author": "The Beatles" },
    { "quote": "Remember the blue sky. It may at times be obscured by clouds, but it is always there.", "author": "Andy Puddicombe" },
    { "quote": "Your focus determines your reality.", "author": "Qui-Gon Jinn" },
    { "quote": "Let go of the battle. Breathe quietly and let it be. Let your body relax and your heart soften.", "author": "Jack Kornfield" },
    { "quote": "These mountains that you are carrying, you were only supposed to climb.", "author": "Najwa Zebian" },
    { "quote": "It is very rare or almost impossible that an event can be negative from all points of view.", "author": "Dalai Lama" },
    { "quote": "In our times, it is radical to choose to sit still and be silent, to resist an identity of busyness, ceaseless motion, and noise, and to reclaim our sanity and humanity by coming home to ourselves.", "author": "Sumi Loundon Kim" },
    { "quote": "Nature does not hurry, yet everything is accomplished.", "author": "Lao Tzu" },
    { "quote": "In today's rush, we all think too much - seek too much - want too much - and forget about the joy of just being.", "author": "Eckhart Tolle" },
    { "quote": "Almost everything will work again if you unplug it for a few minutes ... including you.", "author": "Anne Lamott" },
    { "quote": "It takes courage to say yes to rest and play, in a culture where exhaustion is seen as a symbol status.", "author": "BrenÃ© Brown" },
    { "quote": "There is nothing more important to true growth than realizing that you are not the voice of the mind—you are the one who hears it.',, "author": "Michael A. Singer" },
    { "quote": "So much time and effort is spent on wanting to change, trying to change, to be somebody different, better, or new. Why not use this time to get comfortable with yourself as you are instead?", "author": "Andy Puddicombe" },
    { "quote": "Don't believe everything you think. Thoughts are just that â€“ thoughts.", "author": "Allan Lokos" },
    { "quote": "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.", "author": "Buddha" },
    { "quote": "Our own worst enemy cannot harm us as much as our unwise thoughts. No one can help us as much as our compassionate thoughts.", "author": "Buddha" },
    { "quote": "Everything is created twice. First in the mind and then in reality.", "author": "Robin Sharma" },
    { "quote": "Each morning we are born again. What we do today is what matters most.", "author": "Buddha" },
    { "quote": "To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself.", "author": "Thich Nhat Hanh" },
    { "quote": "Look at children. Of course they may quarrel, but generally speaking they do not harbor ill feelings as much or as long as adults do. [...] If they feel angry with someone, they express it, and then it is finished. They can still play with that person the following day.", "author": "Dalai Lama" },
    { "quote": "A beautiful way to practice mindfulness, which is almost guaranteed to improve your social life, is to [...] give your full moment-to-moment attention to another person with a nonjudgmental mind [...]", "author": "Chade-Meng Tan" },
    { "quote": "The only reason we don't open our hearts and minds to other people is that they trigger confusion in us that we don't feel brave enough or sane enough to deal with. To the degree that we look clearly and compassionately at ourselves, we feel confident and fearless about looking into someone else's eyes.", "author": "Pema Chodron" },
    { "quote": "Look at other people and ask yourself if you are really seeing them or just your thoughts about them.", "author": "Jon Kabat-Zinn" },
    { "quote": "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.", "author": "Dalai Lama" },
    { "quote": "And in the end the love you take is equal to the love you make.", "author": "The Beatles" },
    { "quote": "Treat everyone you meet as if they were you.", "author": "Doug Dillon" },
    { "quote": "A good friend who points out mistakes and imperfections and rebukes evil is to be respected as if he reveals the secret of some hidden treasure.", "author": "Dalai Lama" },
    { "quote": "Before you speak, let your words pass through three gates: Is it true? Is it necessary? Is it kind?", "author": "Buddha" },
    { "quote": "When you move your focus from competition to contribution, life becomes a celebration. Never try to defeat people, just win their hearts.", "author": "Buddha" },
    { "quote": "When another person makes you suffer, it is because he suffers deeply within himself [...] He does not need punishment; he needs help. That's the message he is sending.", "author": "Thich Nhat Hanh" },
  { "quote": "Usually, when we hear or read something new, we just compare it to our own ideas. If it is the same, we accept it and say that it is correct. If it is not, we say it is incorrect. In either case, we learn nothing.", "author": "Thich Nhat Hanh" },
  { "quote": "A mind is like a parachute. It doesn't work if it isn't open.", "author": "Frank Zappa" },
  { "quote": "For things to reveal themselves to us, we need to be ready to abandon our views about them.", "author": "Thich Nhat Hanh" },
  { "quote": "When you talk, you are only repeating what you already know. But if you listen, you may learn something new.", "author": "Dalai Lama" },
  { "quote": "An anxious mind is an unproductive mind that doesn't inspire the best in others. A top priority for mindful leaders is cultivating peace of mind.", "author": "Matt Tenney" },
  { "quote": "For mindful leaders, cultivating such organizational health requires [...] Eliminate toxicity. Appreciate health. Build trust. Send clear messages. Embrace resistance. Understand blindness. Accept invitations. Heal wounds. Be realistic.", "author": "Michael Carroll" },
  { "quote": "[Mindful leadership] enables a leader to respond to a situation as it arises, to respond to the reality of constant changes from a place of deep calm and focus [...]", "author": "Maria Gonzalez" },
  { "quote": "Mindfulness enables leaders to be fully present, aware of themselves and their impact on other people, and sensitive to their reactions to stressful situations.", "author": "Bill George" },
  { "quote": "Happiness is when what you think, what you say, and what you do are in harmony.", "author": "Mahatma Gandhi" },
  { "quote": "Raise your words, not your voice. It is rain that grows flowers, not thunder.", "author": "Rumi" },
  { "quote": "This is the real secret of life â€” to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.", "author": "Alan Watts" },
  { "quote": "Work is only a part of life. But work is life only when done in mindfulness.", "author": "Thich Nhat Hanh" },
  { "quote": "Ideally, we are able to find a job and work in such a way that our work is of benefit to the Earth and to all living beings.", "author": "Thich Nhat Hanh" },
  { "quote": "Perhaps one of the reasons we don't enjoy all these activities as much as we could is because we think activities need to be exciting for us to enjoy them. Many people confuse joy and happiness with excitement. But excitement is not the same as happiness. With joy and happiness we have a sense of satisfaction. There's a feeling of satisfaction in being in the here and now, when you recognize you have so many conditions for happiness in the present moment, whether you're sitting, walking, standing, or working.", "author": "Thich Nhat Hanh" },
  { "quote": "Donâ€™t do any task in order to get it over with. Resolve to do each job in a relaxed way, with all your attention. Enjoy and be one with your work.", "author": "Thich Nhat Hanh" },
  { "quote": "If we're not comparing the present moment to thoughts of the past or thoughts of the future, the present moment is actually perfect just as it is.", "author": "Matt Tenney" },
  { "quote": "Be happy in the moment, that's enough. Each moment is all we need, not more.", "author": "Mother Teresa" },
  { "quote": "Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.", "author": "Lao Tzu" },
  { "quote": "We're so busy watching out for what's just ahead of us that we don't take time to enjoy where we are.", "author": "Bill Watterson" },
  { "quote": "Meditation practice isn't about trying to throw ourselves away and become something better. It's about befriending who we are already.", "author": "Pema Chodron" },
    { "quote": "Ask yourself: Where am I? Answer: Here. Ask yourself: What time is it? Answer: Now. Say it until you can hear it.", "author": "Ram Dass" },
    { "quote": "Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes, which it will.", "author": "James Baraz" },
    { "quote": "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.", "author": "Marcus Aurelius" },
    { "quote": "In this moment, there is plenty of time. In this moment, you are precisely as you should be. In this moment, there is infinite possibility.", "author": "Victoria Moran" },
    { "quote": "We already have everything we are looking for, everything we want to become. Be yourself. Life is precious as it is. All the elements for your happiness are already here.", "author": "Thich Nhat Hanh" },
    { "quote": "There is no way to happiness â€” happiness is the way.", "author": "Thich Nhat Hanh" },
    { "quote": "Those who are without compassion cannot see what is seen with the eyes of compassion.", "author": "Thich Nhat Hanh" },
    { "quote": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.", "author": "Thich Nhat Hanh" },
    { "quote": "Because you are alive, everything is possible.", "author": "Thich Nhat Hanh" },
    { "quote": "Waking up this morning, I smile. Twenty-four brand new hours are before me. I vow to live fully in each moment and to look at all beings with eyes of compassion.", "author": "Thich Nhat Hanh" },
    { "quote": "If you take good care of the present, there is no need to worry about the future.", "author": "Thich Nhat Hanh" },
    { "quote": "Awareness is like the sun. When it shines on things, they are transformed.", "author": "Thich Nhat Hanh" },
    { "quote": "There is no enlightenment outside of daily life.", "author": "Thich Nhat Hanh" },
    { "quote": "Around us, life bursts with miracles - a glass of water, a ray of sunshine, a leaf, a caterpillar, a flower, laughter, raindrops. If we are tired and feel discouraged by life's daily struggles, we may not notice these miracles, but they are always there.", "author": "Thich Nhat Hanh" },
    { "quote": "Happiness is not something ready made. It comes from your own actions.", "author": "Dalai Lama" },
    { "quote": "Love is the absence of judgment.", "author": "Dalai Lama" },
    { "quote": "If you think you are too small to make a difference, try sleeping with a mosquito.", "author": "Dalai Lama" },
    { "quote": "Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it. I am going to use all my energies to develop myself, to expand my heart out to others; to achieve enlightenment for the benefit of all beings. I am going to have kind thoughts towards others, I am not going to get angry or think badly about others. I am going to benefit others as much as I can.", "author": "Dalai Lama" },
    { "quote": "Choose to be optimistic, it feels better.", "author": "Dalai Lama" },
    { "quote": "Be kind whenever possible. It is always possible.", "author": "Dalai Lama" },
    { "quote": "A disciplined mind leads to happiness, and an undisciplined mind leads to suffering.", "author": "Dalai Lama" },
    { "quote": "Open your arms to change but don't let go of your values.", "author": "Dalai Lama" },
    { "quote": "A genuine, affectionate smile is very important in our day-to-day lives.", "author": "Dalai Lama" },
    { "quote": "As you breathe in, cherish yourself. As you breathe out, cherish all beings.", "author": "Dalai Lama" },
];

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('next-quote').addEventListener('click', nextQuote);
});


let currentQuote = 0;
let countdownTimer = 8;

function displayQuote() {
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');
  const quoteBox = document.getElementById('quote-box');
  const timerSpan = document.getElementById('timer');

  countdownTimer = 8;
  timerSpan.textContent = countdownTimer;

  quoteText.textContent = `"${quotes[currentQuote].quote}"`;
  authorText.textContent = quotes[currentQuote].author;

  quoteBox.classList.add('visible');
}

function nextQuote() {
  // Generate a random index based on the length of the quotes array
  currentQuote = Math.floor(Math.random() * quotes.length);
  const quoteBox = document.getElementById('quote-box');
  quoteBox.classList.remove('visible');
  setTimeout(displayQuote, 500); // Short delay before showing the next quote
}

function updateCountdown() {
    const timerSpan = document.getElementById('timer');
    if(countdownTimer > 0) {
        timerSpan.textContent = countdownTimer;
        countdownTimer--;
    } else {
        nextQuote(); // Call nextQuote when countdownTimer reaches zero
    }
    setTimeout(updateCountdown, 1000);
}


displayQuote();
updateCountdown();
