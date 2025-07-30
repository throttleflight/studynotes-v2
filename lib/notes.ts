// This is a mock notes service
// In a real app, you would fetch this data from an API or database

export interface NoteSubsection {
  id: string
  title: string
  content: string
  images?: string[]
}

export interface NoteSection {
  id: string
  title: string
  content: string
  images?: string[]
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
        images: [
          "https://example.com/images/calculus-intro.png"
        ],
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
            images: [
              "https://example.com/images/newton-leibniz.png"
            ],
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
