// This is a mock notes service
// In a real app, you would fetch this data from an API or database

export interface NoteSubsection {
  id: string
  title: string
  content: string
}

export interface NoteSection {
  id: string
  title: string
  content: string
  subsections?: NoteSubsection[]
}

export interface Note {
  id: string
  title: string
  description: string
  sections: NoteSection[]
  category: string
  categoryName: string
  date: string
  tags: string[]
}

const mockNotes: Note[] = [
  {
    id: "1",
    title: "Introduction to Calculus",
    description: "Basic concepts of limits, derivatives, and integrals",
    sections: [
      {
        id: "introduction",
        title: "Introduction to Calculus",
        content: `Calculus is a branch of mathematics that deals with the study of rates of change and accumulation. It was developed independently by Isaac Newton and Gottfried Wilhelm Leibniz in the late 17th century.

        The two main branches of calculus are differential calculus and integral calculus. Differential calculus deals with the study of rates at which quantities change, using the concept of the derivative. Integral calculus deals with the study of the area beneath a curve, using the concept of the integral.

        This comprehensive guide will take you through the fundamental concepts of calculus, starting with limits and progressing through derivatives and integrals.`,
        subsections: [
          {
            id: "history",
            title: "Historical Development",
            content: `The development of calculus was one of the greatest intellectual achievements of the 17th century. Both Isaac Newton and Gottfried Wilhelm Leibniz developed the fundamental ideas independently, leading to what is known as the "Leibniz-Newton calculus controversy."

            **Newton's Approach (1665-1667):**
            - Developed the method of fluxions
            - Focused on rates of change and motion
            - Used geometric and physical intuition
            - Initially kept his work private

            **Leibniz's Approach (1674-1676):**
            - Developed a more systematic notation
            - Emphasized the algebraic aspects
            - Published his work first (1684)
            - Created the notation we use today (dx, dy, ∫)

            The controversy over priority lasted for decades, but today we recognize both mathematicians as co-inventors of calculus.`,
          },
          {
            id: "applications",
            title: "Modern Applications",
            content: `Calculus has become fundamental to virtually every field of science and engineering:

            **Physics and Engineering:**
            - Motion analysis and dynamics
            - Electromagnetic field theory
            - Fluid mechanics and thermodynamics
            - Signal processing and control systems

            **Economics and Finance:**
            - Optimization of profit and cost functions
            - Risk analysis and portfolio theory
            - Economic modeling and forecasting

            **Biology and Medicine:**
            - Population dynamics and growth models
            - Pharmacokinetics and drug dosing
            - Epidemiological modeling
            - Medical imaging and reconstruction

            **Computer Science:**
            - Machine learning and optimization algorithms
            - Computer graphics and animation
            - Numerical analysis and simulation`,
          },
        ],
      },
      {
        id: "limits",
        title: "Understanding Limits",
        content: `A fundamental concept in calculus is the **limit**. 

        **Definition:** The **limit** of a function $f(x)$ as $x$ approaches a value $c$ is the value that $f(x)$ gets arbitrarily close to as $x$ gets arbitrarily close to $c$. This is written as:

        $$\\lim_{x \\to c} f(x) = L$$

        where $L$ is the limit.

        A **continuous function** is defined as a function where the limit at every point equals the function value at that point.

        Limits are essential because they allow us to define derivatives and integrals rigorously. Without limits, we couldn't handle situations where functions are undefined at certain points or where we need to find instantaneous rates of change.`,
        subsections: [
          {
            id: "limit-properties",
            title: "Properties of Limits",
            content: `**Key properties of limits include:**

            **Arithmetic Properties:**
            - The limit of a sum: $\\lim_{x \\to c} [f(x) + g(x)] = \\lim_{x \\to c} f(x) + \\lim_{x \\to c} g(x)$
            - The limit of a product: $\\lim_{x \\to c} [f(x) \\cdot g(x)] = \\lim_{x \\to c} f(x) \\cdot \\lim_{x \\to c} g(x)$
            - The limit of a quotient: $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to c} f(x)}{\\lim_{x \\to c} g(x)}$ (provided the denominator limit is not zero)

            **Squeeze Theorem:**
            If $g(x) \\leq f(x) \\leq h(x)$ for all $x$ in some interval containing $c$, and $\\lim_{x \\to c} g(x) = \\lim_{x \\to c} h(x) = L$, then $\\lim_{x \\to c} f(x) = L$.

            **Continuity and Limits:**
            A function $f$ is continuous at $c$ if $\\lim_{x \\to c} f(x) = f(c)$.`,
          },
          {
            id: "limit-techniques",
            title: "Techniques for Evaluating Limits",
            content: `**Direct Substitution:**
            For continuous functions, simply substitute the value: $\\lim_{x \\to 2} (3x + 1) = 3(2) + 1 = 7$

            **Factoring:**
            For rational functions with indeterminate forms:
            $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$$

            **L'Hôpital's Rule:**
            For indeterminate forms $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$:
            $$\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$$

            **Rationalization:**
            For limits involving radicals:
            $$\\lim_{x \\to 0} \\frac{\\sqrt{x+1} - 1}{x} = \\lim_{x \\to 0} \\frac{1}{\\sqrt{x+1} + 1} = \\frac{1}{2}$$`,
          },
          {
            id: "one-sided-limits",
            title: "One-Sided Limits and Infinite Limits",
            content: `**One-Sided Limits:**
            - **Right-hand limit:** $\\lim_{x \\to c^+} f(x)$ (approaching from the right)
            - **Left-hand limit:** $\\lim_{x \\to c^-} f(x)$ (approaching from the left)
            - A limit exists if and only if both one-sided limits exist and are equal

            **Infinite Limits:**
            When function values grow without bound:
            - $\\lim_{x \\to c} f(x) = +\\infty$ (function increases without bound)
            - $\\lim_{x \\to c} f(x) = -\\infty$ (function decreases without bound)

            **Limits at Infinity:**
            Behavior as $x$ approaches $\\pm\\infty$:
            - $\\lim_{x \\to \\infty} \\frac{1}{x} = 0$
            - $\\lim_{x \\to \\infty} \\frac{2x^2 + 3x + 1}{x^2 + 5} = 2$ (ratio of leading coefficients)

            **Vertical and Horizontal Asymptotes:**
            - Vertical asymptote at $x = c$ if $\\lim_{x \\to c} f(x) = \\pm\\infty$
            - Horizontal asymptote at $y = L$ if $\\lim_{x \\to \\infty} f(x) = L$`,
          },
        ],
      },
      {
        id: "derivatives",
        title: "Derivatives and Differentiation",
        content: `The **derivative** of a function $f(x)$ with respect to $x$ is defined as the limit of the difference quotient as $h$ approaches 0:

        $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

        It represents the **instantaneous rate of change** of the function at a particular point.

        Geometrically, the derivative at a point gives us the slope of the tangent line to the curve at that point. This concept is fundamental in understanding how quantities change.`,
        subsections: [
          {
            id: "derivative-rules",
            title: "Differentiation Rules",
            content: `**Basic Rules:**
            - **Constant Rule:** $\\frac{d}{dx}(c) = 0$
            - **Power Rule:** $\\frac{d}{dx}(x^n) = nx^{n-1}$
            - **Constant Multiple Rule:** $\\frac{d}{dx}(cf(x)) = cf'(x)$
            - **Sum/Difference Rule:** $\\frac{d}{dx}(f(x) \\pm g(x)) = f'(x) \\pm g'(x)$

            **Advanced Rules:**
            - **Product Rule:** $\\frac{d}{dx}(uv) = u'v + uv'$
            - **Quotient Rule:** $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}$
            - **Chain Rule:** $\\frac{d}{dx}(f(g(x))) = f'(g(x)) \\cdot g'(x)$

            **Trigonometric Derivatives:**
            - $\\frac{d}{dx}(\\sin x) = \\cos x$
            - $\\frac{d}{dx}(\\cos x) = -\\sin x$
            - $\\frac{d}{dx}(\\tan x) = \\sec^2 x$

            **Exponential and Logarithmic:**
            - $\\frac{d}{dx}(e^x) = e^x$
            - $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$
            - $\\frac{d}{dx}(a^x) = a^x \\ln a$`,
          },
          {
            id: "derivative-applications",
            title: "Applications of Derivatives",
            content: `**Optimization Problems:**
            Finding maximum and minimum values of functions:
            - Critical points occur where $f'(x) = 0$ or $f'(x)$ is undefined
            - Use the first derivative test or second derivative test
            - Applications: maximizing profit, minimizing cost, optimizing design

            **Related Rates:**
            Problems involving rates of change of related quantities:
            - Identify the relationship between variables
            - Differentiate both sides with respect to time
            - Substitute known values and solve

            **Motion Analysis:**
            - **Position:** $s(t)$
            - **Velocity:** $v(t) = s'(t)$
            - **Acceleration:** $a(t) = v'(t) = s''(t)$

            **Curve Sketching:**
            - Find critical points and inflection points
            - Determine intervals of increase/decrease
            - Identify concavity and asymptotes
            - Sketch the complete graph`,
          },
          {
            id: "implicit-differentiation",
            title: "Implicit Differentiation and Higher Derivatives",
            content: `**Implicit Differentiation:**
            When $y$ is defined implicitly as a function of $x$:
            - Differentiate both sides of the equation with respect to $x$
            - Use the chain rule: $\\frac{d}{dx}(y^n) = ny^{n-1}\\frac{dy}{dx}$
            - Solve for $\\frac{dy}{dx}$

            **Example:** For $x^2 + y^2 = 25$:
            $$2x + 2y\\frac{dy}{dx} = 0$$
            $$\\frac{dy}{dx} = -\\frac{x}{y}$$

            **Higher Order Derivatives:**
            - **Second derivative:** $f''(x) = \\frac{d^2f}{dx^2}$
            - **Third derivative:** $f'''(x) = \\frac{d^3f}{dx^3}$
            - **nth derivative:** $f^{(n)}(x) = \\frac{d^nf}{dx^n}$

            **Concavity and Inflection Points:**
            - $f''(x) > 0$: concave up
            - $f''(x) < 0$: concave down
            - Inflection points where $f''(x) = 0$ and concavity changes`,
          },
        ],
      },
      {
        id: "integrals",
        title: "Integrals and Integration",
        content: `The **integral** of a function $f(x)$ represents the accumulated change over an interval. There are two main types of integrals:

        **Definite Integrals:** 
        $$\\int_a^b f(x)\\,dx$$
        This gives a numerical value representing the signed area under the curve from $x = a$ to $x = b$.

        **Indefinite Integrals (Antiderivatives):**
        $$\\int f(x)\\,dx = F(x) + C$$
        This gives a family of functions where $F'(x) = f(x)$ and $C$ is the constant of integration.

        **The Fundamental Theorem of Calculus** connects derivatives and integrals:

        If $F(x) = \\int_a^x f(t)\\,dt$, then $F'(x) = f(x)$

        This means differentiation and integration are inverse operations.`,
        subsections: [
          {
            id: "integration-techniques",
            title: "Integration Techniques",
            content: `**Basic Integration Formulas:**
            - $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$)
            - $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$
            - $\\int e^x\\,dx = e^x + C$
            - $\\int \\sin(x)\\,dx = -\\cos(x) + C$
            - $\\int \\cos(x)\\,dx = \\sin(x) + C$

            **Substitution Method (u-substitution):**
            Used when the integrand contains a function and its derivative:
            1. Let $u = g(x)$, then $du = g'(x)dx$
            2. Rewrite the integral in terms of $u$
            3. Integrate with respect to $u$
            4. Substitute back to get the answer in terms of $x$

            **Example:** $\\int 2x\\cos(x^2)\\,dx$
            Let $u = x^2$, then $du = 2x\\,dx$
            $\\int \\cos(u)\\,du = \\sin(u) + C = \\sin(x^2) + C$`,
          },
          {
            id: "integration-by-parts",
            title: "Integration by Parts and Advanced Techniques",
            content: `**Integration by Parts:**
            Formula: $\\int u\\,dv = uv - \\int v\\,du$

            **LIATE Rule for choosing $u$:**
            - **L**ogarithmic functions
            - **I**nverse trigonometric functions  
            - **A**lgebraic functions (polynomials)
            - **T**rigonometric functions
            - **E**xponential functions

            **Example:** $\\int x e^x\\,dx$
            Let $u = x$, $dv = e^x\\,dx$
            Then $du = dx$, $v = e^x$
            $\\int x e^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C = e^x(x-1) + C$

            **Partial Fractions:**
            For rational functions $\\frac{P(x)}{Q(x)}$ where degree of $P < $ degree of $Q$:
            1. Factor the denominator $Q(x)$
            2. Decompose into partial fractions
            3. Integrate each term separately

            **Trigonometric Substitution:**
            For expressions involving:
            - $\\sqrt{a^2 - x^2}$: use $x = a\\sin\\theta$
            - $\\sqrt{a^2 + x^2}$: use $x = a\\tan\\theta$  
            - $\\sqrt{x^2 - a^2}$: use $x = a\\sec\\theta$`,
          },
          {
            id: "definite-integrals",
            title: "Definite Integrals and Applications",
            content: `**Fundamental Theorem of Calculus (Part 2):**
            If $f$ is continuous on $[a,b]$ and $F$ is an antiderivative of $f$, then:
            $$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

            **Properties of Definite Integrals:**
            - $\\int_a^a f(x)\\,dx = 0$
            - $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$
            - $\\int_a^b f(x)\\,dx + \\int_b^c f(x)\\,dx = \\int_a^c f(x)\\,dx$

            **Applications:**
            
            **Area Between Curves:**
            Area = $\\int_a^b |f(x) - g(x)|\\,dx$

            **Volume of Solids of Revolution:**
            - **Disk Method:** $V = \\pi\\int_a^b [f(x)]^2\\,dx$
            - **Washer Method:** $V = \\pi\\int_a^b ([f(x)]^2 - [g(x)]^2)\\,dx$
            - **Shell Method:** $V = 2\\pi\\int_a^b x f(x)\\,dx$

            **Arc Length:**
            $L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$

            **Work and Physics Applications:**
            - Work done by variable force: $W = \\int_a^b F(x)\\,dx$
            - Center of mass and moments
            - Fluid pressure and force`,
          },
        ],
      },
    ],
    category: "math",
    categoryName: "Mathematics",
    date: "June 15, 2023",
    tags: ["Calculus", "Mathematics", "Derivatives", "Integrals"],
  },
  {
    id: "2",
    title: "World History: 20th Century",
    description: "Major events and developments of the 20th century",
    sections: [
      {
        id: "overview",
        title: "Overview of the 20th Century",
        content: `The 20th century was a period of enormous changes in politics, technology, economics, and culture. It saw two world wars, the rise and fall of communism, the development of nuclear weapons, and the beginning of the digital age.

        This century was marked by unprecedented global conflicts, revolutionary technological advances, and dramatic social transformations that shaped the modern world we live in today.`,
        subsections: [
          {
            id: "major-themes",
            title: "Major Themes",
            content: `**Political Transformation:**
            - Rise and fall of empires
            - Emergence of new nation-states
            - Ideological conflicts (capitalism vs. communism)
            - Decolonization movements

            **Technological Revolution:**
            - Industrial automation and mass production
            - Transportation advances (automobiles, aviation, space travel)
            - Communication revolution (radio, television, internet)
            - Medical breakthroughs and life expectancy increases

            **Social Changes:**
            - Women's rights and suffrage movements
            - Civil rights and racial equality struggles
            - Urbanization and changing family structures
            - Educational expansion and literacy improvements`,
          },
          {
            id: "timeline",
            title: "Century Timeline",
            content: `**1900-1914: The Belle Époque**
            - Period of optimism and cultural flourishing
            - Industrial growth and technological innovation
            - Rising tensions between European powers

            **1914-1918: World War I Era**
            - The Great War and its aftermath
            - Russian Revolution (1917)
            - End of several empires

            **1918-1939: Interwar Period**
            - Economic instability and the Great Depression
            - Rise of fascism and totalitarian regimes
            - Failed attempts at international cooperation

            **1939-1945: World War II Era**
            - Global conflict and genocide
            - Nuclear age begins
            - Formation of the United Nations

            **1945-1991: Cold War Era**
            - Bipolar world order
            - Decolonization and independence movements
            - Space race and technological competition

            **1991-2000: Post-Cold War**
            - Globalization acceleration
            - Digital revolution begins
            - New international challenges emerge`,
          },
        ],
      },
      {
        id: "world-war-1",
        title: "World War I (1914-1918)",
        content: `World War I was triggered by the assassination of Archduke Franz Ferdinand of Austria on June 28, 1914. It involved the major powers of Europe, divided into the Allied Powers (Britain, France, Russia, and later the United States) and the Central Powers (Germany, Austria-Hungary, Ottoman Empire, and Bulgaria).`,
        subsections: [
          {
            id: "causes",
            title: "Causes of World War I",
            content: `**Long-term Causes:**
            - **Imperialism:** Competition for colonies and global influence
            - **Nationalism:** Ethnic tensions, especially in the Balkans
            - **Alliance System:** Complex web of mutual defense treaties
            - **Militarism:** Arms race and military buildup

            **The Alliance System:**
            - **Triple Alliance:** Germany, Austria-Hungary, Italy
            - **Triple Entente:** France, Russia, Britain
            - **Balkan Tensions:** Austria-Hungary vs. Serbia

            **Immediate Cause:**
            - June 28, 1914: Assassination of Archduke Franz Ferdinand in Sarajevo
            - July Crisis: Diplomatic breakdown
            - August 1914: War declarations cascade across Europe`,
          },
          {
            id: "major-battles",
            title: "Major Battles and Campaigns",
            content: `**Western Front:**
            - **Battle of the Marne (1914):** Stopped German advance on Paris
            - **Battle of Verdun (1916):** Longest single battle, 700,000+ casualties
            - **Battle of the Somme (1916):** First day: 60,000 British casualties
            - **Battle of Passchendaele (1917):** Epitome of trench warfare horror

            **Eastern Front:**
            - **Battle of Tannenberg (1914):** German victory over Russia
            - **Brusilov Offensive (1916):** Major Russian success
            - **Russian Revolution (1917):** Led to separate peace

            **Other Theaters:**
            - **Gallipoli Campaign (1915-1916):** Failed Allied attempt to open new front
            - **Italian Front:** Mountain warfare in the Alps
            - **Middle Eastern Theater:** Arab Revolt and British campaigns

            **Naval Warfare:**
            - **Battle of Jutland (1916):** Largest naval battle
            - **Unrestricted Submarine Warfare:** German U-boat campaign
            - **Lusitania Sinking (1915):** Influenced U.S. opinion`,
          },
          {
            id: "consequences",
            title: "Consequences and Impact",
            content: `**Human Cost:**
            - **Military Deaths:** 8-10 million soldiers killed
            - **Civilian Deaths:** 7-8 million civilians died
            - **Wounded:** 21 million military personnel wounded
            - **Spanish Flu:** 1918-1919 pandemic killed 50-100 million

            **Political Changes:**
            - **Empires Collapsed:** German, Austro-Hungarian, Russian, Ottoman
            - **New Nations:** Poland, Czechoslovakia, Yugoslavia, Baltic states
            - **Russian Revolution:** Led to Soviet Union formation
            - **German Republic:** Weimar Republic established

            **Treaty of Versailles (1919):**
            - **War Guilt Clause:** Germany accepts full responsibility
            - **Territorial Losses:** Alsace-Lorraine to France, Polish Corridor
            - **Military Restrictions:** German army limited to 100,000 men
            - **Reparations:** Massive financial payments required

            **Long-term Impact:**
            - Set stage for World War II
            - Changed warfare forever (chemical weapons, aviation, tanks)
            - Accelerated social changes (women's roles, class structures)
            - Created lasting Middle Eastern conflicts`,
          },
        ],
      },
      {
        id: "interwar-period",
        title: "The Interwar Period (1918-1939)",
        content: `The period between the two world wars was marked by economic instability, political upheaval, and the rise of totalitarian regimes.`,
        subsections: [
          {
            id: "economic-crisis",
            title: "Economic Instability and the Great Depression",
            content: `**Post-War Economic Problems:**
            - **War Debt:** Massive government borrowing during WWI
            - **Inflation:** Currency devaluation in Germany and other countries
            - **Unemployment:** Returning soldiers struggled to find work
            - **Trade Disruption:** International commerce slow to recover

            **The Great Depression (1929-1939):**
            - **Black Tuesday (October 29, 1929):** Stock market crash
            - **Bank Failures:** Thousands of banks closed worldwide
            - **Unemployment:** Reached 25% in the United States, higher elsewhere
            - **Global Impact:** International trade fell by 30%

            **Government Responses:**
            - **New Deal (USA):** Roosevelt's programs for recovery
            - **Keynesian Economics:** Government intervention in economy
            - **Autarky:** Some countries turned to economic nationalism
            - **Public Works:** Infrastructure projects to create jobs`,
          },
          {
            id: "rise-of-totalitarianism",
            title: "Rise of Totalitarian Regimes",
            content: `**Soviet Union under Stalin:**
            - **Five-Year Plans:** Rapid industrialization programs
            - **Collectivization:** Forced agricultural reorganization
            - **Great Purge (1936-1938):** Elimination of perceived enemies
            - **Cult of Personality:** Stalin's absolute control

            **Fascist Italy under Mussolini:**
            - **March on Rome (1922):** Mussolini comes to power
            - **Corporate State:** Fascist economic organization
            - **Ethiopian War (1935-1936):** Imperial expansion
            - **Alliance with Germany:** Axis partnership

            **Nazi Germany under Hitler:**
            - **Rise to Power (1933):** Appointed Chancellor, then Führer
            - **Gleichschaltung:** Coordination of all aspects of society
            - **Nuremberg Laws (1935):** Legal persecution of Jews
            - **Rearmament:** Violation of Versailles Treaty

            **Common Features:**
            - Single-party rule and suppression of opposition
            - State control of economy and society
            - Propaganda and mass rallies
            - Secret police and surveillance
            - Aggressive nationalism and militarism`,
          },
          {
            id: "international-tensions",
            title: "International Tensions and Failed Diplomacy",
            content: `**League of Nations Failures:**
            - **Manchurian Crisis (1931):** Japan invades China, League ineffective
            - **Ethiopian Crisis (1935):** Italy conquers Ethiopia despite sanctions
            - **Rhineland Remilitarization (1936):** Germany violates Versailles
            - **Lack of Enforcement:** No military power to back decisions

            **Appeasement Policy:**
            - **Munich Agreement (1938):** Britain and France allow German expansion
            - **Sudetenland Crisis:** Czechoslovakia sacrificed for "peace"
            - **Neville Chamberlain:** "Peace for our time" declaration
            - **Failure of Appeasement:** Encouraged further aggression

            **Steps to War:**
            - **Spanish Civil War (1936-1939):** Proxy conflict between ideologies
            - **Anti-Comintern Pact (1936):** Germany-Japan alliance
            - **Anschluss (1938):** Germany annexes Austria
            - **Nazi-Soviet Pact (1939):** Temporary alliance, divides Poland

            **Final Crisis:**
            - **Invasion of Poland (September 1, 1939):** Germany attacks
            - **British and French Declarations:** War declared September 3
            - **End of Appeasement:** Diplomatic solutions exhausted`,
          },
        ],
      },
      {
        id: "world-war-2",
        title: "World War II (1939-1945)",
        content: `World War II was a global war that involved the vast majority of the world's nations. It was the deadliest conflict in human history, marked by mass deaths of civilians, including the Holocaust and the only use of nuclear weapons in warfare.`,
        subsections: [
          {
            id: "european-theater",
            title: "European Theater",
            content: `**Blitzkrieg and Early German Success (1939-1941):**
            - **Poland Campaign (1939):** First demonstration of blitzkrieg tactics
            - **Phoney War (1939-1940):** Period of limited military activity
            - **Fall of France (1940):** German conquest in six weeks
            - **Battle of Britain (1940):** RAF defeats Luftwaffe air campaign

            **Operation Barbarossa (1941-1944):**
            - **Largest Military Operation:** 3.8 million Axis troops invade USSR
            - **Initial Success:** Germans advance to Moscow suburbs
            - **Stalingrad (1942-1943):** Turning point, German 6th Army destroyed
            - **Kursk (1943):** Largest tank battle, German offensive power broken

            **Allied Victory (1944-1945):**
            - **D-Day (June 6, 1944):** Allied invasion of Normandy
            - **Liberation of Western Europe:** Paris, Brussels, Amsterdam freed
            - **Soviet Offensive:** Red Army advances through Eastern Europe
            - **Fall of Berlin (April-May 1945):** Hitler's suicide, German surrender`,
          },
          {
            id: "pacific-theater",
            title: "Pacific Theater",
            content: `**Japanese Expansion (1941-1942):**
            - **Pearl Harbor (December 7, 1941):** Surprise attack brings U.S. into war
            - **Southeast Asia Conquest:** Philippines, Dutch East Indies, Singapore
            - **Doolittle Raid (April 1942):** First U.S. attack on Japanese mainland
            - **Battle of the Coral Sea (May 1942):** First naval battle fought entirely by aircraft

            **Turning Point:**
            - **Battle of Midway (June 4-7, 1942):** Decisive U.S. naval victory
            - **Four Japanese aircraft carriers sunk:** Irreplaceable loss of pilots
            - **Strategic Initiative:** Shifts from Japan to United States

            **Island-Hopping Campaign (1943-1945):**
            - **Guadalcanal (1942-1943):** First major Allied ground victory
            - **Central Pacific Drive:** Marshall, Caroline, Mariana Islands
            - **Philippines Campaign:** MacArthur returns as promised
            - **Iwo Jima and Okinawa:** Costly victories demonstrate Japanese determination

            **End of War:**
            - **Atomic Bombs:** Hiroshima (August 6) and Nagasaki (August 9)
            - **Soviet Invasion of Manchuria:** August 9, 1945
            - **Japanese Surrender:** August 15, 1945 (V-J Day)`,
          },
          {
            id: "holocaust",
            title: "The Holocaust and War Crimes",
            content: `**Nazi Persecution Escalation:**
            - **Nuremberg Laws (1935):** Legal discrimination against Jews
            - **Kristallnacht (1938):** "Night of Broken Glass" pogrom
            - **Ghettoization:** Concentration of Jewish populations
            - **Wannsee Conference (1942):** "Final Solution" planning

            **The Final Solution:**
            - **Systematic Extermination:** Industrial-scale murder
            - **Death Camps:** Auschwitz-Birkenau, Treblinka, Sobibor
            - **Gas Chambers:** Zyklon B used for mass killing
            - **6 Million Jews:** Murdered in the Holocaust

            **Other Victims:**
            - **Roma and Sinti:** 220,000-500,000 murdered
            - **Disabled Individuals:** "Euthanasia" program
            - **Political Prisoners:** Communists, socialists, resistance fighters
            - **Jehovah's Witnesses:** Refused to renounce faith

            **War Crimes in Pacific:**
            - **Nanking Massacre (1937):** Mass killing of Chinese civilians
            - **Unit 731:** Japanese biological warfare experiments
            - **Bataan Death March:** Forced march of Allied POWs
            - **Comfort Women:** Sexual slavery system

            **Liberation and Justice:**
            - **Camp Liberation:** Allied forces discover the horror
            - **Nuremberg Trials (1945-1946):** War crimes prosecution
            - **Tokyo War Crimes Tribunal:** Justice in Pacific theater
            - **Never Again:** International commitment to prevent genocide`,
          },
        ],
      },
      {
        id: "cold-war",
        title: "The Cold War Era",
        content: `The Cold War was a period of geopolitical tension between the Soviet Union and the United States and their respective allies, the Eastern Bloc and the Western Bloc, after World War II. It was characterized by proxy wars, an arms race, and ideological competition.`,
        subsections: [
          {
            id: "origins",
            title: "Origins and Early Tensions",
            content: `**Wartime Alliance Breakdown:**
            - **Yalta Conference (1945):** Roosevelt, Churchill, Stalin divide post-war Europe
            - **Potsdam Conference (1945):** Truman, Attlee, Stalin - tensions emerge
            - **Disagreements:** Poland, Germany, Eastern Europe's future
            - **Atomic Diplomacy:** U.S. nuclear monopoly (1945-1949)

            **Iron Curtain Descends:**
            - **Churchill's Speech (1946):** "Iron Curtain" across Europe
            - **Soviet Satellite States:** Communist governments in Eastern Europe
            - **Truman Doctrine (1947):** Containment of communism
            - **Marshall Plan (1947):** Economic aid to rebuild Western Europe

            **Germany Divided:**
            - **Berlin Blockade (1948-1949):** Soviet attempt to control West Berlin
            - **Berlin Airlift:** Western powers supply city by air
            - **NATO Formation (1949):** Western military alliance
            - **Warsaw Pact (1955):** Soviet response to NATO`,
          },
          {
            id: "major-crises",
            title: "Major Cold War Crises",
            content: `**Korean War (1950-1953):**
            - **North Korean Invasion:** Communist attack on South Korea
            - **UN Response:** Led by United States forces
            - **Chinese Intervention:** Escalates conflict
            - **Armistice:** Division at 38th parallel continues

            **Cuban Missile Crisis (1962):**
            - **Soviet Missiles in Cuba:** Nuclear weapons 90 miles from U.S.
            - **Naval Quarantine:** Kennedy blockades Cuba
            - **Thirteen Days:** World on brink of nuclear war
            - **Resolution:** Missiles removed, secret U.S. concessions

            **Berlin Crisis (1961):**
            - **East German Refugee Crisis:** Mass exodus to West
            - **Berlin Wall Construction:** August 13, 1961
            - **Checkpoint Charlie:** Tense U.S.-Soviet standoff
            - **Symbol of Division:** Wall becomes Cold War icon

            **Vietnam War (1955-1975):**
            - **French Defeat:** Dien Bien Phu (1954)
            - **U.S. Escalation:** Gradual involvement increases
            - **Tet Offensive (1968):** Turning point in American opinion
            - **Fall of Saigon (1975):** Communist victory`,
          },
          {
            id: "end-of-cold-war",
            title: "Détente and the End of the Cold War",
            content: `**Détente Period (1970s):**
            - **SALT I (1972):** Strategic Arms Limitation Treaty
            - **Helsinki Accords (1975):** Human rights agreements
            - **Nixon-Brezhnev Summits:** Personal diplomacy
            - **Trade Expansion:** Economic cooperation increases

            **Reagan Era Escalation (1980s):**
            - **Military Buildup:** Largest peacetime defense spending
            - **Strategic Defense Initiative:** "Star Wars" missile defense
            - **Reagan Doctrine:** Support for anti-communist movements
            - **"Evil Empire" Speech:** Ideological confrontation

            **Gorbachev Reforms:**
            - **Glasnost:** Openness and transparency
            - **Perestroika:** Economic and political restructuring
            - **New Thinking:** Foreign policy changes
            - **Arms Control:** INF Treaty (1987)

            **Collapse of Communism:**
            - **Eastern European Revolutions (1989):** Peaceful transitions
            - **Fall of Berlin Wall (November 9, 1989):** Symbol of freedom
            - **German Reunification (1990):** End of division
            - **Soviet Union Dissolution (1991):** End of Cold War

            **Legacy:**
            - **Nuclear Weapons:** Proliferation concerns continue
            - **International Relations:** Unipolar moment for U.S.
            - **Economic Integration:** Globalization accelerates
            - **New Challenges:** Terrorism, climate change, cyber warfare`,
          },
        ],
      },
    ],
    category: "history",
    categoryName: "History",
    date: "July 3, 2023",
    tags: ["History", "20th Century", "World Wars", "Cold War"],
  },
  {
    id: "3",
    title: "Organic Chemistry Fundamentals",
    description: "Basic principles and concepts in organic chemistry",
    sections: [
      {
        id: "introduction",
        title: "What is Organic Chemistry?",
        content: `Organic chemistry is the study of the structure, properties, composition, reactions, and preparation of carbon-containing compounds. These compounds may contain any number of other elements, including hydrogen, nitrogen, oxygen, halogens, phosphorus, silicon, and sulfur.

        Carbon atoms can form stable bonds with other carbon atoms and with atoms of other elements. This property allows carbon to form a vast number of compounds, more than any other element.

        The uniqueness of carbon lies in its ability to:
        - Form four covalent bonds
        - Create long chains and complex structures
        - Form single, double, and triple bonds
        - Create ring structures

        This versatility makes carbon the backbone of all living organisms and the foundation of organic chemistry.`,
      },
      {
        id: "hydrocarbons",
        title: "Hydrocarbons",
        content: `Hydrocarbons are organic compounds consisting entirely of hydrogen and carbon. They form the simplest class of organic compounds and serve as the foundation for understanding more complex molecules.`,
        subsections: [
          {
            id: "alkanes",
            title: "Alkanes (Saturated Hydrocarbons)",
            content: `**Definition:** Alkanes are hydrocarbons that contain only single bonds between carbon atoms.

            **General Formula:** $C_nH_{2n+2}$

            **Examples:**
            - **Methane:** $CH_4$ (natural gas)
            - **Ethane:** $C_2H_6$ (component of natural gas)
            - **Propane:** $C_3H_8$ (LP gas)
            - **Butane:** $C_4H_{10}$ (lighter fluid)

            **Properties:**
            - **Saturated:** All carbon-carbon bonds are single bonds
            - **Nonpolar:** Low solubility in water
            - **Combustible:** Burn in oxygen to produce CO₂ and H₂O
            - **Increasing boiling points:** As molecular size increases

            **Nomenclature:**
            - **Straight-chain alkanes:** Named with -ane suffix
            - **Branched alkanes:** Use IUPAC naming rules
            - **Cycloalkanes:** Ring structures with prefix cyclo-`,
          },
          {
            id: "alkenes",
            title: "Alkenes (Unsaturated Hydrocarbons)",
            content: `**Definition:** Alkenes are hydrocarbons that contain at least one carbon-carbon double bond.

            **General Formula:** $C_nH_{2n}$

            **Examples:**
            - **Ethene (Ethylene):** $C_2H_4$ (plant hormone, plastic production)
            - **Propene:** $C_3H_6$ (polypropylene production)
            - **Butene:** $C_4H_8$ (multiple isomers possible)

            **Properties:**
            - **Unsaturated:** Contains C=C double bonds
            - **More reactive:** Than alkanes due to double bond
            - **Geometric isomerism:** Cis/trans or E/Z isomers possible
            - **Addition reactions:** Can add atoms across double bond

            **Reactions:**
            - **Hydrogenation:** Addition of H₂ to form alkanes
            - **Halogenation:** Addition of halogens (Br₂, Cl₂)
            - **Hydration:** Addition of water to form alcohols
            - **Polymerization:** Formation of plastics and polymers`,
          },
          {
            id: "alkynes-aromatics",
            title: "Alkynes and Aromatic Hydrocarbons",
            content: `**Alkynes:**
            - **Definition:** Hydrocarbons with at least one carbon-carbon triple bond
            - **General Formula:** $C_nH_{2n-2}$
            - **Example:** Ethyne (acetylene) $C_2H_2$ - welding fuel
            - **Properties:** Highly unsaturated, very reactive
            - **Reactions:** Two successive addition reactions possible

            **Aromatic Hydrocarbons:**
            - **Benzene:** $C_6H_6$ - parent aromatic compound
            - **Structure:** Planar ring with delocalized electrons
            - **Stability:** Resonance stabilization makes it less reactive
            - **Substitution:** Undergoes substitution rather than addition

            **Aromatic Examples:**
            - **Toluene:** $C_7H_8$ (methylbenzene)
            - **Xylene:** $C_8H_{10}$ (dimethylbenzene isomers)
            - **Naphthalene:** $C_{10}H_8$ (mothballs)
            - **Anthracene:** $C_{14}H_{10}$ (dyes and pigments)

            **Aromaticity Rules (Hückel's Rule):**
            - Planar, cyclic structure
            - Completely conjugated (alternating single/double bonds)
            - Contains 4n+2 π electrons (where n = 0, 1, 2, ...)`,
          },
        ],
      },
      {
        id: "functional-groups",
        title: "Functional Groups",
        content: `Functional groups are specific groups of atoms within molecules that are responsible for the characteristic chemical reactions of those molecules. They determine the chemical properties and behavior of organic compounds.`,
        subsections: [
          {
            id: "oxygen-containing",
            title: "Oxygen-Containing Functional Groups",
            content: `**Alcohols (-OH):**
            - **Structure:** Hydroxyl group attached to carbon
            - **Examples:** Methanol ($CH_3OH$), Ethanol ($C_2H_5OH$)
            - **Properties:** Polar, can form hydrogen bonds, higher boiling points
            - **Classification:** Primary (1°), Secondary (2°), Tertiary (3°)

            **Aldehydes (-CHO):**
            - **Structure:** Carbonyl group at the end of a carbon chain
            - **Examples:** Formaldehyde ($HCHO$), Acetaldehyde ($CH_3CHO$)
            - **Properties:** Reactive, can be oxidized to carboxylic acids
            - **Uses:** Preservatives, solvents, polymer production

            **Ketones (C=O):**
            - **Structure:** Carbonyl group within a carbon chain
            - **Examples:** Acetone ($CH_3COCH_3$), Butanone ($CH_3COC_2H_5$)
            - **Properties:** Less reactive than aldehydes, good solvents
            - **Uses:** Nail polish remover, industrial solvents

            **Carboxylic Acids (-COOH):**
            - **Structure:** Carboxyl group combining carbonyl and hydroxyl
            - **Examples:** Acetic acid ($CH_3COOH$), Formic acid ($HCOOH$)
            - **Properties:** Acidic, can donate protons, form salts
            - **Uses:** Food preservatives, industrial chemicals

            **Esters (-COO-):**
            - **Structure:** Formed from carboxylic acid and alcohol
            - **Examples:** Methyl acetate, ethyl butyrate (fruity odors)
            - **Properties:** Pleasant odors, used in fragrances and flavors
            - **Formation:** Condensation reaction (esterification)`,
          },
          {
            id: "nitrogen-containing",
            title: "Nitrogen-Containing Functional Groups",
            content: `**Amines (-NH₂, -NHR, -NR₂):**
            - **Structure:** Nitrogen with lone pair of electrons
            - **Classification:** Primary (1°), Secondary (2°), Tertiary (3°)
            - **Examples:** Methylamine ($CH_3NH_2$), Aniline ($C_6H_5NH_2$)
            - **Properties:** Basic, can accept protons, fishy odors
            - **Uses:** Pharmaceuticals, dyes, polymers

            **Amides (-CONH₂):**
            - **Structure:** Carbonyl group bonded to nitrogen
            - **Examples:** Acetamide ($CH_3CONH_2$), Formamide ($HCONH_2$)
            - **Properties:** Less basic than amines, hydrogen bonding
            - **Importance:** Protein structure (peptide bonds)

            **Nitriles (-CN):**
            - **Structure:** Carbon triple-bonded to nitrogen
            - **Examples:** Acetonitrile ($CH_3CN$), Benzonitrile ($C_6H_5CN$)
            - **Properties:** Polar, good solvents
            - **Uses:** Synthetic intermediates, solvents

            **Nitro Compounds (-NO₂):**
            - **Structure:** Nitrogen bonded to two oxygens
            - **Examples:** Nitromethane ($CH_3NO_2$), TNT
            - **Properties:** Electron-withdrawing, can be explosive
            - **Uses:** Explosives, pharmaceuticals, dyes`,
          },
          {
            id: "other-functional-groups",
            title: "Other Important Functional Groups",
            content: `**Halides (R-X):**
            - **Structure:** Carbon bonded to halogen (F, Cl, Br, I)
            - **Examples:** Chloromethane ($CH_3Cl$), Bromoethane ($C_2H_5Br$)
            - **Properties:** Polar C-X bonds, good leaving groups
            - **Reactions:** Nucleophilic substitution, elimination

            **Thiols (-SH):**
            - **Structure:** Sulfur analog of alcohols
            - **Examples:** Methanethiol ($CH_3SH$), Ethanethiol ($C_2H_5SH$)
            - **Properties:** Strong, unpleasant odors, easily oxidized
            - **Uses:** Natural gas odorant, biological systems

            **Ethers (R-O-R'):**
            - **Structure:** Oxygen bonded to two carbon atoms
            - **Examples:** Diethyl ether ($C_2H_5OC_2H_5$), THF
            - **Properties:** Relatively unreactive, good solvents
            - **Uses:** Anesthetics, solvents, fuel additives

            **Phosphates (-PO₄³⁻):**
            - **Structure:** Phosphorus bonded to four oxygens
            - **Examples:** ATP, DNA backbone, phospholipids
            - **Properties:** Highly charged, energy storage
            - **Importance:** Biological energy transfer, genetic material

            **Sulfonic Acids (-SO₃H):**
            - **Structure:** Sulfur bonded to three oxygens and OH
            - **Examples:** Methanesulfonic acid, p-toluenesulfonic acid
            - **Properties:** Very strong acids, good leaving groups
            - **Uses:** Catalysts, detergents, pharmaceuticals`,
          },
        ],
      },
      {
        id: "isomers-reactions",
        title: "Isomers and Organic Reactions",
        content: `**Isomers** are compounds with the same molecular formula but different structural formulas. Understanding isomerism is crucial in organic chemistry as it explains why compounds with identical molecular formulas can have vastly different properties.`,
        subsections: [
          {
            id: "types-of-isomers",
            title: "Types of Isomers",
            content: `**Structural Isomers (Constitutional Isomers):**
            - **Chain Isomers:** Different carbon skeleton arrangements
              - Example: Butane vs. 2-methylpropane (both $C_4H_{10}$)
            - **Position Isomers:** Different positions of functional groups
              - Example: 1-propanol vs. 2-propanol
            - **Functional Group Isomers:** Different functional groups
              - Example: Ethanol ($C_2H_5OH$) vs. dimethyl ether ($CH_3OCH_3$)

            **Stereoisomers:**
            - **Geometric Isomers (Cis-Trans):**
              - Different arrangements around double bonds
              - Cis: same side, Trans: opposite sides
              - Example: cis-2-butene vs. trans-2-butene
            
            - **Optical Isomers (Enantiomers):**
              - Non-superimposable mirror images
              - Contain chiral centers (carbon with 4 different groups)
              - Rotate plane-polarized light in opposite directions
              - Example: L-alanine vs. D-alanine

            **Conformational Isomers:**
            - Different spatial arrangements from rotation around single bonds
            - Rapidly interconverting at room temperature
            - Example: Chair and boat forms of cyclohexane
            - Staggered vs. eclipsed conformations in ethane`,
          },
          {
            id: "reaction-types",
            title: "Types of Organic Reactions",
            content: `**Addition Reactions:**
            - **Definition:** Two molecules combine to form one product
            - **Mechanism:** Occurs at multiple bonds (C=C, C≡C)
            - **Examples:**
              - Hydrogenation: $C_2H_4 + H_2 \\rightarrow C_2H_6$
              - Halogenation: $C_2H_4 + Br_2 \\rightarrow C_2H_4Br_2$
              - Hydration: $C_2H_4 + H_2O \\rightarrow C_2H_5OH$

            **Elimination Reactions:**
            - **Definition:** One molecule splits into two
            - **Mechanism:** Removal of atoms/groups from adjacent carbons
            - **Examples:**
              - Dehydration: $C_2H_5OH \\rightarrow C_2H_4 + H_2O$
              - Dehydrohalogenation: $C_2H_5Br \\rightarrow C_2H_4 + HBr$

            **Substitution Reactions:**
            - **Definition:** One atom or group replaces another
            - **Types:** Nucleophilic (SN1, SN2) and Electrophilic
            - **Examples:**
              - $CH_3Br + OH^- \\rightarrow CH_3OH + Br^-$
              - Benzene + $Br_2 \\rightarrow$ Bromobenzene + $HBr$

            **Rearrangement Reactions:**
            - **Definition:** Atoms within a molecule are reorganized
            - **Mechanism:** Intramolecular bond breaking and forming
            - **Examples:** Carbocation rearrangements, Claisen rearrangement`,
          },
          {
            id: "reaction-mechanisms",
            title: "Reaction Mechanisms and Reagents",
            content: `**Nucleophiles:**
            - **Definition:** Electron-rich species that attack electron-poor centers
            - **Characteristics:** Have lone pairs or negative charges
            - **Examples:** $OH^-$, $NH_3$, $H_2O$, $CN^-$
            - **Reactions:** Attack electrophilic carbons

            **Electrophiles:**
            - **Definition:** Electron-poor species that attack electron-rich centers
            - **Characteristics:** Have positive charges or electron deficiency
            - **Examples:** $H^+$, $Br^+$, $NO_2^+$, carbocations
            - **Reactions:** Attack nucleophilic sites

            **Radicals:**
            - **Definition:** Species with unpaired electrons
            - **Formation:** Homolytic bond cleavage
            - **Characteristics:** Highly reactive, short-lived
            - **Reactions:** Chain reactions (initiation, propagation, termination)
            - **Examples:** Halogenation of alkanes, polymerization

            **Reaction Mechanisms:**
            - **Curved Arrow Notation:** Shows electron movement
            - **Intermediates:** Temporary species formed during reaction
            - **Transition States:** Highest energy points along reaction path
            - **Rate-Determining Step:** Slowest step in multi-step mechanism

            **Factors Affecting Reactions:**
            - **Temperature:** Higher temperature increases reaction rate
            - **Concentration:** Higher concentration increases rate
            - **Catalysts:** Lower activation energy, increase rate
            - **Solvent Effects:** Polar vs. nonpolar solvents
            - **Steric Hindrance:** Bulky groups slow reactions`,
          },
        ],
      },
    ],
    category: "science",
    categoryName: "Science",
    date: "August 12, 2023",
    tags: ["Chemistry", "Organic Chemistry", "Carbon Compounds", "Functional Groups"],
  },
  {
    id: "4",
    title: "Computer Science: Data Structures",
    description: "Common data structures and their applications",
    sections: [
      {
        id: "introduction",
        title: "Introduction to Data Structures",
        content: `Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different kinds of data structures are suited to different kinds of applications, and some are highly specialized for specific tasks.

        The choice of data structure affects:
        - **Time complexity:** How fast operations can be performed
        - **Space complexity:** How much memory is required
        - **Ease of implementation:** How simple the code is to write and maintain

        Understanding data structures is fundamental to:
        - Writing efficient algorithms
        - Solving complex programming problems
        - Optimizing software performance
        - Preparing for technical interviews

        This guide covers the most important data structures every programmer should know.`,
        subsections: [
          {
            id: "complexity-analysis",
            title: "Time and Space Complexity",
            content: `**Big O Notation:**
            - **Definition:** Mathematical notation describing algorithm efficiency
            - **Purpose:** Compare algorithms independent of hardware/implementation
            - **Focus:** Worst-case scenario performance

            **Common Time Complexities:**
            - **O(1) - Constant:** Same time regardless of input size
            - **O(log n) - Logarithmic:** Time increases slowly with input
            - **O(n) - Linear:** Time increases proportionally with input
            - **O(n log n) - Linearithmic:** Efficient sorting algorithms
            - **O(n²) - Quadratic:** Nested loops over input
            - **O(2ⁿ) - Exponential:** Recursive algorithms without memoization

            **Space Complexity:**
            - **Auxiliary Space:** Extra space used by algorithm
            - **In-place Algorithms:** O(1) extra space
            - **Trade-offs:** Often time vs. space complexity

            **Analysis Examples:**
            - **Linear Search:** O(n) time, O(1) space
            - **Binary Search:** O(log n) time, O(1) space
            - **Merge Sort:** O(n log n) time, O(n) space
            - **Quick Sort:** O(n log n) average, O(n²) worst case`,
          },
          {
            id: "abstract-data-types",
            title: "Abstract Data Types (ADTs)",
            content: `**Definition:** Abstract Data Types define data and operations without specifying implementation details.

            **Key ADTs:**
            
            **List ADT:**
            - **Operations:** Insert, delete, search, access by index
            - **Implementations:** Arrays, linked lists, dynamic arrays
            - **Use cases:** Maintaining ordered collections

            **Stack ADT:**
            - **Operations:** Push, pop, peek, isEmpty
            - **LIFO:** Last In, First Out principle
            - **Implementations:** Arrays, linked lists
            - **Use cases:** Function calls, expression evaluation

            **Queue ADT:**
            - **Operations:** Enqueue, dequeue, front, isEmpty
            - **FIFO:** First In, First Out principle
            - **Implementations:** Arrays, linked lists, circular buffers
            - **Use cases:** Process scheduling, breadth-first search

            **Set ADT:**
            - **Operations:** Add, remove, contains, union, intersection
            - **Properties:** No duplicate elements
            - **Implementations:** Hash tables, binary search trees
            - **Use cases:** Membership testing, mathematical operations

            **Map/Dictionary ADT:**
            - **Operations:** Put, get, remove, containsKey
            - **Structure:** Key-value pairs
            - **Implementations:** Hash tables, binary search trees
            - **Use cases:** Databases, caches, symbol tables`,
          },
        ],
      },
      {
        id: "arrays-lists",
        title: "Arrays and Linked Lists",
        content: `**Arrays** are a collection of elements identified by index or key. They are stored in contiguous memory locations, which makes accessing elements by their index very efficient.`,
        subsections: [
          {
            id: "arrays",
            title: "Arrays",
            content: `**Static Arrays:**
            - **Definition:** Fixed-size collection of elements
            - **Memory:** Contiguous allocation
            - **Access Time:** O(1) - direct indexing
            - **Insertion/Deletion:** O(n) - may require shifting

            **Advantages:**
            - **Fast Access:** O(1) random access by index
            - **Cache Friendly:** Spatial locality improves performance
            - **Memory Efficient:** No extra pointers needed
            - **Simple Implementation:** Straightforward to use

            **Disadvantages:**
            - **Fixed Size:** Cannot grow or shrink dynamically
            - **Insertion/Deletion:** Expensive operations
            - **Memory Waste:** May allocate more than needed

            **Dynamic Arrays (Vectors):**
            - **Resizable:** Can grow and shrink as needed
            - **Amortized O(1):** Insertion at end (average case)
            - **Doubling Strategy:** Resize by factor of 2 when full
            - **Examples:** C++ vector, Java ArrayList, Python list

            **Multi-dimensional Arrays:**
            - **2D Arrays:** Matrix representation
            - **Row-major Order:** Elements stored row by row
            - **Column-major Order:** Elements stored column by column
            - **Applications:** Images, matrices, game boards`,
          },
          {
            id: "linked-lists",
            title: "Linked Lists",
            content: `**Singly Linked Lists:**
            - **Structure:** Nodes with data and pointer to next node
            - **Access Time:** O(n) - must traverse from head
            - **Insertion/Deletion:** O(1) - at known position
            - **Memory:** Non-contiguous allocation

            **Node Structure:**
            \`\`\`
            class Node {
                int data;
                Node* next;
            }
            \`\`\`

            **Operations:**
            - **Insert at Head:** O(1)
            - **Insert at Tail:** O(n) without tail pointer, O(1) with tail pointer
            - **Delete:** O(1) if node reference available, O(n) to find node
            - **Search:** O(n) linear traversal

            **Doubly Linked Lists:**
            - **Structure:** Nodes with pointers to both next and previous
            - **Advantages:** Bidirectional traversal, easier deletion
            - **Disadvantages:** Extra memory for previous pointer

            **Circular Linked Lists:**
            - **Structure:** Last node points back to first node
            - **Advantages:** Useful for round-robin scheduling
            - **Applications:** Operating system process scheduling

            **Comparison with Arrays:**
            - **Memory:** Linked lists use more memory (pointers)
            - **Cache Performance:** Arrays better due to locality
            - **Dynamic Size:** Linked lists can grow/shrink easily
            - **Random Access:** Arrays support O(1) access, linked lists O(n)`,
          },
          {
            id: "applications",
            title: "Applications and Use Cases",
            content: `**When to Use Arrays:**
            - **Frequent Random Access:** Need to access elements by index
            - **Mathematical Operations:** Matrix calculations, image processing
            - **Cache-Sensitive Applications:** Performance critical code
            - **Memory Constraints:** When memory usage must be minimized
            - **Simple Data:** When structure doesn't change frequently

            **When to Use Linked Lists:**
            - **Frequent Insertions/Deletions:** Especially at beginning/middle
            - **Unknown Size:** When data size varies significantly
            - **Memory Fragmentation:** When large contiguous blocks unavailable
            - **Implementation of Other Structures:** Stacks, queues, graphs

            **Real-World Examples:**
            
            **Arrays:**
            - **Image Processing:** Pixel data in 2D arrays
            - **Scientific Computing:** Mathematical matrices and vectors
            - **Database Systems:** Fixed-size records
            - **Game Development:** Game boards, tile maps

            **Linked Lists:**
            - **Music Playlists:** Easy to add/remove songs
            - **Browser History:** Forward/backward navigation
            - **Undo Functionality:** Chain of operations
            - **Memory Management:** Free block lists in allocators

            **Hybrid Approaches:**
            - **Deque (Double-ended Queue):** Array of blocks
            - **Hash Table Chaining:** Array of linked lists
            - **B-Trees:** Arrays within tree nodes
            - **Rope Data Structure:** Tree of strings for text editors`,
          },
        ],
      },
      {
        id: "stacks-queues",
        title: "Stacks and Queues",
        content: `**Stacks** are a collection of elements with two principal operations: push (add element) and pop (remove element). They follow the Last In, First Out (LIFO) principle.`,
        subsections: [
          {
            id: "stacks",
            title: "Stacks",
            content: `**Stack Operations:**
            - **Push:** Add element to top - O(1)
            - **Pop:** Remove element from top - O(1)
            - **Peek/Top:** View top element without removing - O(1)
            - **isEmpty:** Check if stack is empty - O(1)
            - **Size:** Get number of elements - O(1)

            **Implementation Options:**
            - **Array-based:** Fixed or dynamic size array
            - **Linked List-based:** Singly linked list with head as top
            - **Advantages/Disadvantages:** Arrays faster, linked lists more flexible

            **Stack Applications:**
            - **Function Call Management:** Call stack in programming languages
            - **Expression Evaluation:** Converting infix to postfix notation
            - **Undo Operations:** Text editors, image editors
            - **Browser History:** Back button functionality
            - **Syntax Parsing:** Matching parentheses, brackets
            - **Depth-First Search:** Graph traversal algorithm

            **Example - Balanced Parentheses:**
            \`\`\`
            bool isBalanced(string expr) {
                stack<char> s;
                for (char c : expr) {
                    if (c == '(' || c == '[' || c == '{') {
                        s.push(c);
                    } else if (c == ')' || c == ']' || c == '}') {
                        if (s.empty()) return false;
                        char top = s.top();
                        s.pop();
                        if (!matches(top, c)) return false;
                    }
                }
                return s.empty();
            }
            \`\`\`

            **Stack Overflow:**
            - **Cause:** Too many function calls or infinite recursion
            - **Prevention:** Iterative solutions, tail recursion optimization
            - **Detection:** Stack size monitoring, recursion depth limits`,
          },
          {
            id: "queues",
            title: "Queues",
            content: `**Queue Operations:**
            - **Enqueue:** Add element to rear - O(1)
            - **Dequeue:** Remove element from front - O(1)
            - **Front:** View front element - O(1)
            - **Rear:** View rear element - O(1)
            - **isEmpty:** Check if queue is empty - O(1)

            **Implementation Options:**
            
            **Array-based Queue:**
            - **Circular Array:** Wrap around when reaching end
            - **Front and Rear Pointers:** Track queue boundaries
            - **Full Condition:** (rear + 1) % size == front
            - **Empty Condition:** front == rear

            **Linked List-based Queue:**
            - **Two Pointers:** Front and rear node references
            - **Enqueue at Rear:** Add new node, update rear pointer
            - **Dequeue from Front:** Remove front node, update front pointer

            **Queue Applications:**
            - **Process Scheduling:** Operating system task management
            - **Breadth-First Search:** Graph traversal algorithm
            - **Print Job Management:** Printer queue systems
            - **Web Server Requests:** Handle incoming HTTP requests
            - **Buffer for Data Streams:** Producer-consumer problems
            - **Level-order Tree Traversal:** Visit nodes level by level

            **Priority Queues:**
            - **Definition:** Elements have associated priorities
            - **Operations:** Insert with priority, extract minimum/maximum
            - **Implementation:** Binary heaps, balanced trees
            - **Applications:** Dijkstra's algorithm, task scheduling

            **Double-ended Queue (Deque):**
            - **Operations:** Insert/delete at both ends
            - **Implementation:** Circular buffer or doubly linked list
            - **Applications:** Sliding window problems, palindrome checking`,
          },
          {
            id: "advanced-applications",
            title: "Advanced Applications and Variations",
            content: `**Stack-based Algorithms:**
            
            **Expression Evaluation:**
            - **Infix to Postfix:** Use operator precedence and associativity
            - **Postfix Evaluation:** Use stack to store operands
            - **Function Call Stack:** Parameter passing and local variables
            - **Recursive Algorithm Simulation:** Convert recursion to iteration

            **Monotonic Stack:**
            - **Definition:** Stack maintaining monotonic order
            - **Applications:** Next greater element, largest rectangle in histogram
            - **Time Complexity:** O(n) for many problems that seem O(n²)

            **Queue-based Algorithms:**
            
            **Breadth-First Search (BFS):**
            - **Graph Traversal:** Visit all nodes level by level
            - **Shortest Path:** In unweighted graphs
            - **Connected Components:** Find all connected parts
            - **Bipartite Graph Check:** Two-coloring problem

            **Sliding Window Problems:**
            - **Maximum in Window:** Use deque to maintain candidates
            - **Moving Average:** Queue of recent values
            - **Rate Limiting:** Token bucket algorithm

            **Producer-Consumer Problem:**
            - **Bounded Buffer:** Fixed-size queue between producer and consumer
            - **Synchronization:** Mutex and condition variables
            - **Applications:** Web servers, database systems

            **Cache Implementations:**
            - **LRU Cache:** Least Recently Used eviction policy
            - **Queue + Hash Map:** O(1) access and update
            - **Applications:** CPU caches, web caches, database buffers

            **Real-time Systems:**
            - **Task Scheduling:** Priority queues for real-time tasks
            - **Interrupt Handling:** Stack for nested interrupts
            - **Event Processing:** Queue for event-driven systems`,
          },
        ],
      },
      {
        id: "trees-hashing",
        title: "Trees and Hash Tables",
        content: `**Trees** are hierarchical data structures with a root value and subtrees of children, represented as a set of linked nodes.`,
        subsections: [
          {
            id: "binary-trees",
            title: "Binary Trees and Binary Search Trees",
            content: `**Binary Tree Properties:**
            - **Definition:** Each node has at most two children (left and right)
            - **Height:** Maximum distance from root to leaf
            - **Complete Tree:** All levels filled except possibly the last
            - **Perfect Tree:** All internal nodes have two children, all leaves at same level

            **Binary Search Tree (BST):**
            - **Ordering Property:** Left child < parent < right child
            - **Search Operation:** O(log n) average, O(n) worst case
            - **Insertion:** Maintain BST property while adding new node
            - **Deletion:** Three cases - leaf, one child, two children

            **BST Operations:**
            \`\`\`
            // Search
            Node* search(Node* root, int key) {
                if (root == nullptr || root->data == key)
                    return root;
                if (key < root->data)
                    return search(root->left, key);
                return search(root->right, key);
            }
            
            // Insertion
            Node* insert(Node* root, int key) {
                if (root == nullptr)
                    return new Node(key);
                if (key < root->data)
                    root->left = insert(root->left, key);
                else if (key > root->data)
                    root->right = insert(root->right, key);
                return root;
            }
            \`\`\`

            **Tree Traversals:**
            - **Inorder:** Left → Root → Right (gives sorted order in BST)
            - **Preorder:** Root → Left → Right (useful for copying tree)
            - **Postorder:** Left → Right → Root (useful for deleting tree)
            - **Level-order:** Breadth-first traversal using queue

            **BST Problems:**
            - **Skewed Trees:** Degenerate into linked list (O(n) operations)
            - **Solution:** Self-balancing trees (AVL, Red-Black)
            - **Applications:** Database indexing, expression parsing, file systems`,
          },
          {
            id: "balanced-trees",
            title: "Balanced Trees",
            content: `**AVL Trees:**
            - **Definition:** Self-balancing BST with height difference ≤ 1
            - **Balance Factor:** Height(left) - Height(right) ∈ {-1, 0, 1}
            - **Rotations:** Single (LL, RR) and double (LR, RL) rotations
            - **Guarantee:** O(log n) operations in worst case

            **Red-Black Trees:**
            - **Properties:** 
              1. Every node is red or black
              2. Root is black
              3. Red nodes have black children
              4. All paths from root to leaves have same number of black nodes
            - **Advantage:** Fewer rotations than AVL during insertion/deletion
            - **Usage:** C++ STL map/set, Java TreeMap/TreeSet

            **B-Trees:**
            - **Definition:** Self-balancing tree with multiple keys per node
            - **Properties:** All leaves at same level, minimum degree t
            - **Node Capacity:** t-1 to 2t-1 keys per node
            - **Applications:** Database systems, file systems
            - **Advantage:** Reduces disk I/O operations

            **Splay Trees:**
            - **Property:** Recently accessed nodes move to root
            - **Splay Operation:** Series of rotations to bring node to root
            - **Amortized O(log n):** Average case performance
            - **Applications:** Caches, memory management

            **Trie (Prefix Tree):**
            - **Structure:** Tree where each path represents a string
            - **Applications:** Autocomplete, spell checkers, IP routing
            - **Space-Time Tradeoff:** Fast search but high memory usage
            - **Compressed Trie:** Radix tree to reduce space`,
          },
          {
            id: "hash-tables",
            title: "Hash Tables",
            content: `**Hash Table Fundamentals:**
            - **Definition:** Array-based structure using hash function to map keys to indices
            - **Hash Function:** Converts key to array index
            - **Load Factor:** α = n/m (elements/buckets)
            - **Goal:** Uniform distribution of keys across buckets

            **Hash Functions:**
            - **Division Method:** h(k) = k mod m
            - **Multiplication Method:** h(k) = ⌊m(kA mod 1)⌋
            - **Universal Hashing:** Randomly chosen from family of functions
            - **Cryptographic Hash:** SHA, MD5 for security applications

            **Collision Resolution:**
            
            **Chaining:**
            - **Method:** Store colliding elements in linked lists
            - **Load Factor:** Can exceed 1
            - **Performance:** O(1 + α) expected time
            - **Advantage:** Simple implementation, handles high load factors

            **Open Addressing:**
            - **Linear Probing:** h(k, i) = (h'(k) + i) mod m
            - **Quadratic Probing:** h(k, i) = (h'(k) + c₁i + c₂i²) mod m
            - **Double Hashing:** h(k, i) = (h₁(k) + i·h₂(k)) mod m
            - **Clustering:** Primary clustering in linear probing

            **Hash Table Performance:**
            - **Average Case:** O(1) for search, insert, delete
            - **Worst Case:** O(n) when all keys hash to same bucket
            - **Space Complexity:** O(n) for n elements
            - **Dynamic Resizing:** Rehashing when load factor exceeds threshold

            **Applications:**
            - **Database Indexing:** Fast record lookup
            - **Caches:** Web caches, CPU caches
            - **Symbol Tables:** Compilers and interpreters
            - **Sets and Maps:** Programming language implementations
            - **Distributed Systems:** Consistent hashing for load balancing`,
          },
        ],
      },
    ],
    category: "cs",
    categoryName: "Computer Science",
    date: "September 5, 2023",
    tags: ["Computer Science", "Data Structures", "Algorithms", "Programming"],
  },
  {
    id: "5",
    title: "English Literature: Modern Classics",
    description: "Analysis of influential works in modern literature",
    sections: [
      {
        id: "introduction",
        title: "Introduction to Modern Literature",
        content: `Modern literature refers to the literature of the late 19th and early 20th centuries, characterized by a break with traditional ways of writing. It was influenced by industrialization, urbanization, new technologies, and the horrors of World War I.

        Key characteristics of modern literature:
        - **Stream of consciousness:** Interior monologue and psychological realism
        - **Fragmentation:** Non-linear narratives and experimental structures
        - **Symbolism:** Heavy use of symbols and metaphors
        - **Alienation:** Themes of isolation and disconnection
        - **Questioning authority:** Challenge to traditional values and institutions

        Modern writers experimented with form, style, and content, creating works that reflected the complexity and uncertainty of the modern world. These innovations continue to influence literature today.`,
      },
      {
        id: "joyce-ulysses",
        title: "James Joyce - Ulysses",
        content: `James Joyce's "Ulysses" (1922) is considered one of the most important works of modernist literature. It uses a stream-of-consciousness technique and parallels with Homer's "Odyssey" to tell the story of a day in the life of Leopold Bloom in Dublin.

        **Structure and Style:**
        - Each chapter corresponds to an episode in Homer's Odyssey
        - Different narrative techniques for each chapter
        - Stream of consciousness reveals characters' inner thoughts
        - Rich use of symbolism and literary allusions

        **Main Characters:**
        - **Leopold Bloom:** The modern Odysseus, an advertising canvasser
        - **Molly Bloom:** Leopold's wife, represents Penelope
        - **Stephen Dedalus:** Young writer, represents Telemachus

        **Themes:**
        - The ordinary heroism of everyday life
        - The search for meaning in modern existence
        - Irish identity and nationalism
        - The relationship between art and life

        **Literary Significance:**
        Joyce's innovative techniques influenced countless writers and established new possibilities for the novel form. The work's psychological depth and experimental style make it a cornerstone of modern literature.`,
      },
      {
        id: "woolf-dalloway",
        title: "Virginia Woolf - Mrs. Dalloway",
        content: `Virginia Woolf's "Mrs. Dalloway" (1925) uses stream of consciousness to explore the thoughts and memories of the protagonist, Clarissa Dalloway, as she prepares for a party she is hosting.

        **Narrative Technique:**
        - Stream of consciousness reveals multiple perspectives
        - Time shifts between present and past through memory
        - Free indirect discourse blends narrator and character voices
        - Single day structure with psychological depth

        **Main Characters:**
        - **Clarissa Dalloway:** Upper-class London hostess
        - **Septimus Warren Smith:** Shell-shocked war veteran
        - **Peter Walsh:** Clarissa's former suitor
        - **Sally Seton:** Clarissa's passionate friend from youth

        **Major Themes:**
        - **Mental illness and trauma:** Particularly post-war psychological damage
        - **Time and memory:** How past experiences shape present identity
        - **Social class and privilege:** Critique of English society
        - **Feminism and women's roles:** Women's limited options in society
        - **Death and mortality:** The presence of death in everyday life

        **Literary Innovation:**
        Woolf's technique of moving seamlessly between characters' consciousness and her exploration of psychological realism established her as a major modernist writer and feminist voice.`,
      },
      {
        id: "fitzgerald-gatsby",
        title: "F. Scott Fitzgerald - The Great Gatsby",
        content: `F. Scott Fitzgerald's "The Great Gatsby" (1925) is a critique of the American Dream in the Jazz Age. It tells the story of the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.

        **Setting and Context:**
        - Set in 1922 during the Roaring Twenties
        - Long Island and New York City locations
        - Post-World War I American prosperity
        - Prohibition era backdrop

        **Main Characters:**
        - **Jay Gatsby:** Mysterious millionaire with a hidden past
        - **Nick Carraway:** Narrator and Gatsby's neighbor
        - **Daisy Buchanan:** Gatsby's lost love, married to Tom
        - **Tom Buchanan:** Wealthy, arrogant husband of Daisy

        **Central Themes:**
        - **The American Dream:** Its corruption and impossibility
        - **Class and social stratification:** Old money vs. new money
        - **Moral decay:** Beneath the glittering surface
        - **The past and nostalgia:** "You can't repeat the past"
        - **Appearance vs. reality:** The illusion of the American Dream

        **Symbolism:**
        - **The green light:** Hope and the unreachable dream
        - **The eyes of Dr. T.J. Eckleburg:** Moral oversight and judgment
        - **The Valley of Ashes:** Moral and social decay

        The novel remains a powerful critique of American society and the pursuit of wealth and status.`,
      },
      {
        id: "orwell-magical-realism",
        title: "Orwell's 1984 and Magical Realism",
        content: `**George Orwell's "1984" (1949)** is a dystopian novel that explores the dangers of totalitarianism. It introduces concepts such as Big Brother, doublethink, and thoughtcrime, which have become part of our cultural lexicon.

        **Key Concepts:**
        - **Big Brother:** The omnipresent government surveillance
        - **Doublethink:** Holding contradictory beliefs simultaneously
        - **Newspeak:** Language designed to limit thought
        - **Thoughtcrime:** Illegal thoughts against the Party

        **Themes:**
        - Totalitarian control and surveillance
        - The manipulation of truth and history
        - Individual freedom vs. state power
        - The power of language to shape thought

        **Magical Realism** emerged as a significant literary movement, particularly in Latin American literature.

        **Gabriel García Márquez's "One Hundred Years of Solitude" (1967)** is a landmark of magical realism. It tells the multi-generational story of the Buendía family in the fictional town of Macondo.

        **Characteristics of Magical Realism:**
        - Fantastical elements presented as normal
        - Blending of myth and reality
        - Non-linear narrative structure
        - Political and social commentary through allegory

        **Themes in Márquez:**
        - Cyclical nature of history
        - Isolation and solitude
        - Latin American identity and politics
        - The relationship between myth and reality

        Both works continue to be studied and appreciated for their innovative techniques, complex characters, and profound insights into the human condition and political realities.`,
      },
    ],
    category: "literature",
    categoryName: "Literature",
    date: "October 20, 2023",
    tags: ["Literature", "Modern Classics", "Novels", "Literary Analysis"],
  },
  {
    id: "6",
    title: "Physics: Quantum Mechanics",
    description: "Introduction to the principles of quantum mechanics",
    sections: [
      {
        id: "introduction",
        title: "Introduction to Quantum Mechanics",
        content: `Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It was developed in the early 20th century when classical physics could not explain certain phenomena.

        **Historical Context:**
        - Developed between 1900-1930 by physicists like Planck, Einstein, Bohr, Heisenberg, and Schrödinger
        - Arose from the need to explain blackbody radiation, photoelectric effect, and atomic spectra
        - Revolutionized our understanding of matter and energy

        **Key Differences from Classical Physics:**
        - Energy is quantized (comes in discrete packets)
        - Particles exhibit wave-like properties
        - Measurement affects the system being observed
        - Probability replaces certainty in predictions

        **Applications:**
        - Atomic and molecular physics
        - Solid-state physics and electronics
        - Quantum computing and cryptography
        - Medical imaging and laser technology

        Quantum mechanics challenges our everyday intuition about reality but provides the most accurate description of the microscopic world.`,
      },
      {
        id: "wave-particle-duality",
        title: "Wave-Particle Duality",
        content: `One of the key principles of quantum mechanics is wave-particle duality, which suggests that all particles exhibit both wave and particle properties. This concept fundamentally changed our understanding of matter and energy.

        **Historical Experiments:**

        **Double-Slit Experiment:**
        - Electrons fired through two parallel slits create an interference pattern
        - When observed, electrons behave like particles
        - When unobserved, they behave like waves
        - Demonstrates the role of measurement in quantum systems

        **Photoelectric Effect (Einstein, 1905):**
        - Light can eject electrons from metal surfaces
        - Energy of ejected electrons depends on light frequency, not intensity
        - Proved light has particle-like properties (photons)
        - Earned Einstein the Nobel Prize

        **De Broglie Wavelength:**
        All matter has an associated wavelength given by:
        $$\\lambda = \\frac{h}{p}$$
        where $h$ is Planck's constant and $p$ is momentum.

        This explains why wave properties are only noticeable for very small particles.

        **Implications:**
        - No clear distinction between waves and particles at quantum scale
        - The nature of reality depends on how we observe it
        - Measurement is an active process that affects the system
        - Classical concepts break down at the quantum level

        This duality is not just a mathematical convenience but a fundamental aspect of nature that has practical applications in modern technology.`,
      },
      {
        id: "uncertainty-principle",
        title: "Heisenberg Uncertainty Principle",
        content: `The Heisenberg Uncertainty Principle states that there is a fundamental limit to the precision with which complementary variables, such as position and momentum, can be known simultaneously. This is not due to limitations in measurement technology, but is inherent in the nature of quantum systems.

        **Mathematical Formulation:**
        $$\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}$$

        Where:
        - $\\Delta x$ = uncertainty in position
        - $\\Delta p$ = uncertainty in momentum  
        - $\\hbar$ = reduced Planck's constant $(h/2\\pi)$

        **Other Uncertainty Relations:**
        - Energy and time: $\\Delta E \\cdot \\Delta t \\geq \\frac{\\hbar}{2}$
        - Angular momentum components: $\\Delta L_x \\cdot \\Delta L_y \\geq \\frac{\\hbar}{2}|\\langle L_z \\rangle|$

        **Physical Interpretation:**
        - The more precisely we know position, the less precisely we can know momentum
        - This is not a measurement problem but a fundamental property of nature
        - Particles don't have definite position and momentum simultaneously
        - The uncertainty principle sets limits on what can be known about quantum systems

        **Consequences:**
        - **Zero-point energy:** Even at absolute zero, particles have kinetic energy
        - **Quantum tunneling:** Particles can pass through energy barriers
        - **Virtual particles:** Short-lived particle-antiparticle pairs in vacuum
        - **Atomic stability:** Prevents electrons from spiraling into the nucleus

        **Practical Applications:**
        - Limits the precision of quantum measurements
        - Fundamental to the operation of electron microscopes
        - Important in quantum computing and cryptography
        - Explains the stability of atoms and molecules

        The uncertainty principle reveals that nature is fundamentally probabilistic rather than deterministic at the quantum scale.`,
      },
      {
        id: "superposition-entanglement",
        title: "Superposition and Quantum Entanglement",
        content: `**Quantum Superposition** is the principle that a quantum system can exist in multiple states simultaneously until it is measured. This is one of the most counterintuitive aspects of quantum mechanics.

        **Schrödinger's Cat Thought Experiment:**
        - A cat in a box with a quantum-triggered poison mechanism
        - According to quantum mechanics, the cat is simultaneously alive and dead
        - Measurement (opening the box) forces the system into a definite state
        - Illustrates the absurdity of applying quantum rules to macroscopic objects

        **Mathematical Representation:**
        A quantum state can be written as:
        $$|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$$

        Where $\\alpha$ and $\\beta$ are complex probability amplitudes, and $|\\alpha|^2 + |\\beta|^2 = 1$

        **Applications of Superposition:**
        - Quantum computing uses superposition for parallel processing
        - Quantum sensors achieve unprecedented precision
        - Atomic clocks rely on superposition of energy states

        **Quantum Entanglement** is a phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently, regardless of the distance separating them.

        **Properties of Entangled Systems:**
        - Measurement of one particle instantly affects its entangled partner
        - Einstein called this "spooky action at a distance"
        - No information travels faster than light (no communication possible)
        - Violates local realism but preserves causality

        **Bell's Theorem and Bell Inequalities:**
        - Proved that no local hidden variable theory can reproduce quantum predictions
        - Experimental tests consistently violate Bell inequalities
        - Confirms that quantum mechanics is fundamentally non-local

        **Applications of Entanglement:**
        - **Quantum cryptography:** Unbreakable communication security
        - **Quantum computing:** Enables quantum algorithms
        - **Quantum teleportation:** Transfer of quantum states
        - **Quantum sensors:** Enhanced measurement precision

        These phenomena form the foundation for emerging quantum technologies that promise to revolutionize computing, communication, and sensing.`,
      },
    ],
    category: "science",
    categoryName: "Science",
    date: "November 8, 2023",
    tags: ["Physics", "Quantum Mechanics", "Wave-Particle Duality", "Uncertainty Principle"],
  },
]

export function getNotes(): Note[] {
  return mockNotes
}

export function getNoteById(id: string): Note | undefined {
  return mockNotes.find((note) => note.id === id)
}

export function getNotesByCategory(category: string): Note[] {
  return mockNotes.filter((note) => note.category === category)
}

export function searchNotes(query: string): Note[] {
  const lowercaseQuery = query.toLowerCase()
  return mockNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(lowercaseQuery) ||
      note.description.toLowerCase().includes(lowercaseQuery) ||
      note.sections.some(
        (section) =>
          section.title.toLowerCase().includes(lowercaseQuery) ||
          section.content.toLowerCase().includes(lowercaseQuery) ||
          (section.subsections &&
            section.subsections.some(
              (subsection) =>
                subsection.title.toLowerCase().includes(lowercaseQuery) ||
                subsection.content.toLowerCase().includes(lowercaseQuery),
            )),
      ) ||
      note.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
