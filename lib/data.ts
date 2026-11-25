import { e, type Seed } from './content-types';

export const mpcsSeed: Seed[] = [
  // ----------------------------------------------------------------- kits
  e('kit', 'Sword', { summary: 'Fundamentals: spacing, combos and timing.', data: { code: 'SWD', style: 'Mechanical' } }),
  e('kit', 'Axe', { summary: 'Shield play, disables and heavy hits.', data: { code: 'AXE', style: 'Tactical' } }),
  e('kit', 'UHC', { summary: 'No natural regen — every heart counts.', data: { code: 'UHC', style: 'Resource' } }),
  e('kit', 'Crystal', { summary: 'Explosive, high-speed end crystal combat.', data: { code: 'CRY', style: 'Explosive' } }),
  e('kit', 'Netherite Pot', { summary: 'Full netherite, potions and long fights.', data: { code: 'NPT', style: 'Endurance' } }),
  e('kit', 'SMP', { summary: 'Survival-style gear and utility.', data: { code: 'SMP', style: 'Utility' } }),
  e('kit', 'Mace', { summary: 'Aerial burst damage and wind charges.', data: { code: 'MCE', style: 'Aerial' } }),

  // ---------------------------------------------------------------- season
  e('season', 'Season 1', {
    summary: 'The inaugural MPCS season. In planning — details below are the current plan and may change.',
    data: {
      status: 'Planned',
      dates: 'To be announced',
      teams: '8 teams (planned)',
      prize_pool: 'To be announced — subject to confirmation',
      qualification: 'Open qualifiers and invited teams',
      champion: '',
    },
    body: `
    ## Planned structure
    1. **Qualifiers** — open qualifiers plus a small number of invited teams.
    2. **Regular season** — round-robin series between qualified teams.
    3. **Playoffs** — top teams by standings enter a playoff bracket.
    4. **Grand final** — a best-of-seven series for the Season 1 title.

    Dates, team count and the prize pool will be confirmed before registration opens.`,
  }),

  // ---------------------------------------------------------------- rules
  e('rule', 'General', {
    data: { number: '1' },
    body: `
    1. This rulebook applies to all official MPCS competition.
    2. By registering, teams and players agree to follow this rulebook and the decisions of league officials.
    3. League officials may interpret these rules in the spirit of fair competition where a situation is not covered.
    4. The rulebook may be updated between seasons. Material changes during a season will be announced before they take effect.`,
  }),
  e('rule', 'Player eligibility', {
    data: { number: '2' },
    body: `
    1. Players must own a legitimate Minecraft: Java Edition account.
    2. Each player may be rostered on only one team per season.
    3. Players must not be serving an active competitive ban.
    4. Minimum age and regional requirements will be confirmed before Season 1 registration.
    5. Players must provide accurate account information; account sharing is prohibited.`,
  }),
  e('rule', 'Team rosters', {
    data: { number: '3' },
    body: `
    1. A roster consists of four starting players and up to three substitutes (minimum four, maximum seven).
    2. Each team designates a captain responsible for communication with officials.
    3. Roster changes are allowed during set transfer windows only.
    4. Team names and branding must be appropriate and must not impersonate another team or organisation.`,
  }),
  e('rule', 'Match format', {
    data: { number: '4' },
    body: `
    1. Every series is **best of seven games** — the first team to win four games wins the series.
    2. Each game is played on one kit from the seven-kit competitive pool.
    3. Each game consists of rounds of 4v4 team elimination; the first team to win three rounds wins the game.
    4. Substitutions may be made between games, not during a game.`,
  }),
  e('rule', 'Pick/ban procedure', {
    data: { number: '5' },
    body: `
    1. The higher-seeded team chooses to be **Team A** or **Team B**.
    2. **Bans:** Team A bans one kit, then Team B bans one kit.
    3. **Picks:** the five remaining kits are drafted for games 1–5 in the order A, B, A, B, A.
    4. **Game 6** (if needed) is played on the kit banned by the team leading the series.
    5. **Game 7** (if needed) is played on the remaining banned kit.
    6. No kit is played more than once in a series.`,
  }),
  e('rule', 'Scoring and standings', {
    data: { number: '6' },
    body: `
    1. A series win awards **3 points**; a series loss awards **0 points**.
    2. Standings ties are broken by: head-to-head result, then game difference, then round difference.
    3. If a tie remains, officials will schedule a tiebreaker series.`,
  }),
  e('rule', 'Match procedures', {
    data: { number: '7' },
    body: `
    1. Teams must be present and ready in the match lobby ten minutes before the scheduled start.
    2. A team that is not ready fifteen minutes after the scheduled start may forfeit the series.
    3. Captains confirm the pick/ban with the match official before game 1.
    4. Technical issues must be reported to the official immediately; play may be paused or a round replayed at their discretion.
    5. Results are recorded by the official and confirmed by both captains.`,
  }),
  e('rule', 'Conduct and fair play', {
    data: { number: '8' },
    body: `
    1. Cheating clients, unfair modifications, macros and exploits are prohibited.
    2. Players may be required to use approved anti-cheat or screen-share checks.
    3. Harassment, hate speech and unsportsmanlike conduct are not tolerated.
    4. Match fixing and betting on MPCS matches by participants are prohibited.`,
  }),
  e('rule', 'Disputes', {
    data: { number: '9' },
    body: `
    1. Disputes must be raised by the team captain with the match official during or immediately after the series.
    2. Officials review available evidence (recordings, logs, statements) and issue a decision.
    3. Teams may appeal a decision in writing within 48 hours. Appeals are reviewed by league staff not involved in the original decision.
    4. Appeal decisions are final.`,
  }),
  e('rule', 'Penalties', {
    data: { number: '10' },
    body: `
    Depending on severity, penalties may include: a warning, round or game forfeits, series forfeit, point deductions, player suspension, or disqualification from the season.`,
  }),

  // ----------------------------------------------------------------- news
  e('news', 'Announcing the Minecraft PvP Championship Series', {
    summary: 'MPCS is a new team esports league for Minecraft PvP. Season 1 is in planning — here is what we are building.',
    data: { category: 'League announcement' },
    body: `
    The Minecraft PvP Championship Series (MPCS) is a team esports league built around a seven-kit competitive pool, a pick/ban draft and best-of-seven series.

    ## Where things stand
    MPCS has **not launched** and Season 1 has no confirmed dates. The competition format and draft rulebook are published now so players and teams can prepare and give feedback.

    ## How to get involved
    - **Players:** email league operations about your interest — free agents welcome.
    - **Teams:** captains can email their roster’s interest in Season 1 qualifiers.
    - **Organisations and sponsors:** get in touch through the Partners page.`,
  }),

  // ------------------------------------------------------------------ FAQ
  e('faq', 'What is MPCS?', {
    body: 'The Minecraft PvP Championship Series — a team esports league for Minecraft PvP with seasons, qualifiers, playoffs and a championship title.',
  }),
  e('faq', 'When does Season 1 start?', {
    body: 'There are no confirmed dates yet. Qualifier registration updates will be published on this website.',
  }),
  e('faq', 'Is there a prize pool?', {
    body: 'Prize pool information will be announced once it is confirmed. We will not advertise prizes before they are secured.',
  }),
  e('faq', 'Do I need a team to take part?', {
    body: 'Teams compete in the league, but free agents can email league operations about player interest. We plan to help free agents find teams before qualifiers.',
  }),
  e('faq', 'Is the rulebook final?', {
    body: 'No. The current rulebook is a draft published for transparency and feedback. It will be finalised and versioned before Season 1 registration opens.',
  }),
  e('faq', 'Is there a Discord server?', {
    body: 'Not yet. Official channels will be announced on mpcs.gg and by email.',
  }),

  // ------------------------------------------------------- about sections
  e('section', 'Background', {
    summary: 'League history',
    data: { page: 'about' },
    body: 'MPCS was founded to give competitive Minecraft PvP the structure other esports take for granted: seasons, standings, professional match operations and a championship that means something. The league is in its founding stage — Season 1 will be its first chapter.',
  }),
  e('section', 'Competitive philosophy', {
    summary: 'How we compete',
    data: { page: 'about' },
    body: `
    - **Versatility wins.** Seven kits and a draft reward complete teams, not one-trick specialists.
    - **Strategy matters.** Pick/ban turns every series into a contest of preparation as well as execution.
    - **Integrity is non-negotiable.** Clear rules, impartial officials and a real appeals process.`,
  }),
  e('section', 'League structure', {
    summary: 'How MPCS is organised',
    data: { page: 'about' },
    body: `
    - **Seasons** — each season has qualifiers, a regular season, playoffs and a grand final.
    - **Teams** — rosters of four starters and up to three substitutes.
    - **League operations** — officials run matches, verify results and handle disputes.
    - **Hall of Fame** — champions and MVPs are recorded permanently.`,
  }),
  e('section', 'Long-term goals', {
    summary: 'The road ahead',
    data: { page: 'about' },
    body: `
    - Establish MPCS as the premier championship in Minecraft PvP.
    - Produce professional broadcasts for playoff and final series.
    - Publish full standings, match history and player statistics.
    - Grow sustainable prize pools with confirmed partners.`,
  }),

  // ------------------------------------------------------ format sections
  e('section', 'Team competition', {
    summary: 'The format',
    data: { page: 'format' },
    body: 'MPCS is a team league. Each series is played 4v4 between two rosters. Within a game, rounds are team elimination — the last team with players standing wins the round, and the first to three rounds wins the game.',
  }),
  e('section', 'Best-of-seven series', {
    summary: 'Series',
    data: { page: 'format' },
    body: 'Every series is best of seven games. The first team to four game wins takes the series. With seven kits in the pool, a full series can see every kit played exactly once.',
  }),
  e('section', 'Pick/ban draft', {
    summary: 'The draft',
    data: { page: 'format' },
    body: `
    1. Team A bans a kit, then Team B bans a kit.
    2. The remaining five kits are picked for games 1–5 in the order A, B, A, B, A.
    3. Game 6 is played on the kit banned by the team leading the series.
    4. Game 7 is played on the last remaining kit.

    Bans are a double-edged sword: the kit you remove early may come back to decide the series.`,
  }),
  e('section', 'Scoring and regulations', {
    summary: 'Scoring',
    data: { page: 'format' },
    body: 'Series wins earn 3 standings points. Ties are broken by head-to-head, then game difference, then round difference. Full regulations, conduct rules and dispute procedures are in the [rulebook](/rules).',
  }),

  // ----------------------------------------------------- seasons sections
  e('section', 'Seasonal structure', {
    summary: 'Every season',
    data: { page: 'seasons' },
    body: `
    1. **Qualifiers** — open qualifiers and invitations decide the field.
    2. **Regular season** — round-robin series build the standings.
    3. **Playoffs** — the top teams enter a bracket.
    4. **Grand final** — a best-of-seven series decides the champion.`,
  }),
  e('section', 'Season archive', {
    summary: 'History',
    data: { page: 'seasons' },
    body: 'Each completed season will be archived here with its final standings, playoff bracket, champion and award winners.',
  }),

  // -------------------------------------------------------- teams sections
  e('section', 'Eligibility', {
    summary: 'Who can compete',
    data: { page: 'teams' },
    body: 'Teams must meet the eligibility rules in the [rulebook](/rules): legitimate Java Edition accounts, one team per player per season, and no active competitive bans. Final age and regional requirements will be confirmed before registration.',
  }),
  e('section', 'Roster requirements', {
    summary: 'Rosters',
    data: { page: 'teams' },
    body: `
    - **4 starters** play each game.
    - **Up to 3 substitutes** — rosters of 4 to 7 players.
    - **1 captain** handles communication with league officials.
    - Roster changes only during transfer windows.`,
  }),
  e('section', 'How participation will work', {
    summary: 'Participation',
    data: { page: 'teams' },
    body: 'When Season 1 registration opens, captains will register their team and roster, every player will confirm their account, and teams will enter the open qualifiers or receive an invitation. Players and captains can email league operations with questions.',
  }),

  // ---------------------------------------------------- qualifier sections
  e('section', 'Open qualifiers', {
    summary: 'Earn your place',
    data: { page: 'qualifiers' },
    body: 'Any eligible team can enter the open qualifiers. Qualifiers are planned as a bracket played over a short period, with the top teams earning places in the regular season.',
  }),
  e('section', 'Invited teams', {
    summary: 'Invitations',
    data: { page: 'qualifiers' },
    body: 'A small number of places may be offered to invited teams based on competitive history. Invitations and the criteria used will be published before qualifiers begin.',
  }),
  e('section', 'Qualification process', {
    summary: 'Step by step',
    data: { page: 'qualifiers' },
    body: `
    1. Registration opens and is announced to everyone on the player and team lists.
    2. Teams register their roster and confirm eligibility.
    3. The qualifier bracket is published.
    4. Qualifier series are played under full league rules.
    5. Qualified and invited teams are announced together.`,
  }),
  e('section', 'Future qualifier structure', {
    summary: 'Beyond Season 1',
    data: { page: 'qualifiers' },
    body: 'As the league grows, later seasons may add promotion and relegation, regional qualifiers or a secondary division. Any change will be announced before the season it applies to.',
  }),

  // ---------------------------------------------------- partners section
  e('section', 'Sponsorship opportunities', {
    summary: 'Partner with MPCS',
    data: { page: 'partners' },
    body: `
    - **League partner** — association with the whole championship.
    - **Season title partner** — naming rights for a season.
    - **Prize pool contributor** — directly fund player prizes.
    - **Broadcast segments** — sponsored segments in playoff and final broadcasts.`,
  }),
];

