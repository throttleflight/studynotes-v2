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
    title: "Physics 1",
    description: "Covering topics in Kinematics",
    sections: [
      {
        id: "kinematics1D",
        title: "1D Kinematics",
        content: `Topics Include`,
        subsections: [
          {
            id: "motion-in-one-dimension",
            title: "Motion in One",
            content: `Kinematics Definition: How things move, speeding up, speeding down, length in time from one point to another, or how fast they are traveling.
            
            Dynamics Definition: Why things move (forces).
            
            - Meter is the official unit of length in the International System of Units or SI. (Distance)
            - Distance (d)
            - Meter (m)
            - Second is the standard unit of time. (Time)
            - Time (t)
            - Second (s)
            
            Speed Equation:
            $$speed = \\frac{distance}{time}$$
            Distance in meters and time in seconds. Speed is measured in $\frac{m}{s}$ (meters per second).
            
            Problem Solving Steps
            > 1. Identify and list the givens and the unknown.
            > 2. Draw and label a diagram of the situation.
            > 3. Select a formula containing the givens and the unknown.
            > 4. Cross out terms that are equal to zero.
            > 5. Solve the formula so that the unknown is alone on the left.
            > 6. Substitute in the givens, with their units.
            > 7. Calculate the value of the unknown, including its units.`,
          },
          {
            id: "distance-time-graphs",
            title: "Distance-Time Graphs",
            content: `Graphing Motion

            With a table of time ($x$) and distance ($y$), points are plotted on a scatter plot and a line of best fit (trend line) is made. When finding the speed, use points on the line of best fit. 

            Slope Equation (Speed in a distance-time graph)
            $$m=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}=\\frac{\\triangle y}{\\triangle x}$$
            Also known as rise over run or delta y over delta x.

            The slope equation in a distance-time graph determines the speed of the object.

            - Higher speed = Greater Slope

            - Lower speed = Smaller Slope`,
          },
          {
            id: "reference-frames-displacement-velocity",
            title: "Reference Frames, Displacement, and Velocity",
            content: `Reference Frame Definition: A reference frame lets us define where an object is located, relative to other objects.
            

            X-Axis for Direction

            +x is usually to the right.

            -x is usually to the left.


            
            Displacement Definition: Displacement is the change in position. (Can be a negative value - meaning a vector)
            $$\\triangle x = x-x_{0}$$
            $x_{0}$ is "$x$-naught" - initial position (naught means nothing or zero)

            $x$ is the final position.



            Instantaneous Speed (Scalar):
            $$s=\\frac{d}{t}$$

            Average Speed (Scalar):
            A bar is placed over the "$s$" to indicate average speed.
            $$\\bar{s}=\\frac{d}{t}$$

            Instantaneous Velocity (Vector):
            $$v=\\frac{\\triangle x}{\\triangle t}$$
            $\\triangle x$ is the displacement of the object.



            Average Velocity (Vector):
            A bar is placed over the "$v$" to indicate average velocity.
            $$\\bar{v}=\\frac{\\triangle x}{\\triangle t}$$
            Both values of $\\triangle x$ and $\\triangle t$ is the total.
            `,
          },
        ]
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
