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
    title: "Calculus I - Complete Course",
    description:
      "Complete Calculus I course covering fundamental concepts, derivatives, integrals, approximation methods, limits, and differential equations",
    sections: [
      {
        id: "week-1",
        title: "Week 1: Fundamental Concepts",
        content: `This week covers the essential building blocks of calculus. These fundamental concepts form the foundation for understanding limits, derivatives, and integrals.

      <strong>Key Topics Covered:</strong>
      - Definition of a function and vertical line test
      - Formula and graphical representation of functions
      - Domain, range, and codomain concepts
      - Inverse functions and invertibility
      - Composition of functions
      - Inverse trigonometric functions

      <strong>Learning Objectives:</strong>
      By the end of this week, you should be able to:
      - Determine if a relation is a function using the vertical line test
      - Find the domain and range of various functions
      - Compose functions and find inverse functions
      - Work with inverse trigonometric functions
      - Apply these concepts to solve real-world problems`,
        subsections: [
          {
            id: "definition-of-function",
            title: "1. Definition of a Function",
            content: `<strong>Definition:</strong> A function f: ℝ → ℝ associates to each number x in its domain exactly one number f(x).

          <strong>Key Characteristics:</strong>
          - Each input has exactly one output
          - Functions can be represented as formulas, graphs, or tables
          - The relationship must be well-defined and unambiguous

          <strong>Real-World Applications:</strong>
          Functions appear everywhere in science and engineering. Here are two important examples:

          <strong>Falling Object Formula:</strong>
          $$H(t) = h - \\frac{1}{2}gt^2$$

          For h = 200 m and g = 10 m/s²:
          - H(5) = 200 - ½ · 10 · 5² = 200 - 125 = 75 m
          - H(3) = 200 - ½ · 10 · 3² = 200 - 45 = 155 m

          <strong>Ideal Gas Formula:</strong>
          $$P(T) = \\frac{nRT}{V}$$

          Where P is pressure, T is temperature, n is amount of gas, R is the gas constant, and V is volume.`,
          },
          {
            id: "graph-of-function",
            title: "Graph of a Function",
            content: `<strong>Definition:</strong> The graph of a function f: ℝ → ℝ is the curve going through all the points (x, f(x)) for x in the domain of f.

          <strong>Reading Values from Graphs:</strong>
          To find values from a graph, you can read off coordinates directly. For the falling object example, when t = 5, the height H(5) = 75 m.

          <strong>Vertical Line Test:</strong>
          This is the fundamental test to determine if a curve represents a function.

          <strong>Theorem:</strong> A curve in the plane is the graph of a function over a certain domain if every vertical line at x-values in that domain intersects the curve exactly once.

          <strong>Examples:</strong>
          - A straight line (not vertical) passes the vertical line test ✓
          - A parabola opening up or down passes the test ✓
          - A circle fails the vertical line test ✗
          - A horizontal line passes the test ✓

          <strong>Important Note:</strong> A circle is not a function because vertical lines can intersect it at two points, violating the "exactly one output per input" rule.`,
          },
          {
            id: "domain-and-range",
            title: "2. Domain and Range of a Function",
            content: `A function can be visualized as a machine that transforms inputs to outputs.

          <strong>Formal Definition:</strong> A function f: A → B is a rule that assigns to each element x in the set A, a unique element f(x) in the set B.

          <strong>Key Terminology:</strong>
          - <strong>Domain (A)</strong>: The set of all possible input values
          - <strong>Codomain (B)</strong>: The set that contains all possible output values
          - <strong>Range (R)</strong>: The set of all actual output values as x varies throughout the domain

          <strong>Mathematical Notation:</strong>
          $$R = \\{f(x) | x \\in A\\}$$

          The symbol ∈ represents set membership and means "is an element of".`,
          },
          {
            id: "maximal-domain",
            title: "Maximal Domain",
            content: `<strong>Definition:</strong> The maximal domain of f(x) consists of all real numbers x for which the value f(x) is a real number.

          <strong>Finding Maximal Domain:</strong>
          When finding the maximal domain, look for values that would make the function undefined:

          1. <strong>Division by zero</strong>: Exclude values that make denominators zero
          2. <strong>Square roots</strong>: For real functions, exclude values that make expressions under square roots negative
          3. <strong>Logarithms</strong>: Exclude values that make arguments of logarithms non-positive

          <strong>Example:</strong>
          $$f(x) = \\frac{1}{x^2}$$

          <strong>Analysis:</strong>
          - The function is undefined when x² = 0
          - This occurs when x = 0
          - Therefore, the maximal domain is: {x ∈ ℝ | x ≠ 0} = (-∞, 0) ∪ (0, ∞)`,
          },
          {
            id: "composition-of-functions",
            title: "3. Composition of Functions",
            content: `Function composition is a fundamental operation that combines two functions to create a new function.

          <strong>Definition:</strong> If f(x) and g(x) are two functions, the composite function f ∘ g is defined by:
          $$(f \\circ g)(x) = f(g(x))$$

          <strong>Key Points:</strong>
          - Read f ∘ g as "f composed with g" or "f of g"
          - The output of g becomes the input of f
          - Order matters: f ∘ g ≠ g ∘ f in general

          <strong>Example:</strong>
          Let f(x) = x² - x and g(x) = sin(x)

          <strong>Finding (f ∘ g)(x):</strong>
          $$(f \\circ g)(x) = f(g(x)) = f(\\sin(x)) = (\\sin(x))^2 - \\sin(x)$$`,
          },
          {
            id: "inverse-functions",
            title: "4. The Inverse Function and Invertibility",
            content: `Inverse functions "undo" the action of the original function, essentially reversing the input-output relationship.

          <strong>Definition:</strong> Suppose f is a function with domain D and range R. A function g is the inverse of f if for all x in D and y in R:
          $$f(x) = y \\Leftrightarrow x = g(y)$$

          <strong>Notation:</strong> The inverse function is denoted as f⁻¹ (read as "f inverse")

          <strong>Horizontal Line Test:</strong>
          A function is invertible if and only if all horizontal lines intersect the graph of the function in at most one place.`,
          },
          {
            id: "inverse-trigonometric",
            title: "5. Inverse of Trigonometric Functions",
            content: `<strong>Arcsine Function:</strong>
          - Domain: [-1, 1], Range: [-π/2, π/2]
          - y = arcsin(x) ⟺ sin(y) = x

          <strong>Arccosine Function:</strong>
          - Domain: [-1, 1], Range: [0, π]
          - y = arccos(x) ⟺ cos(y) = x

          <strong>Arctangent Function:</strong>
          - Domain: ℝ, Range: (-π/2, π/2)
          - y = arctan(x) ⟺ tan(y) = x`,
          },
          {
            id: "composition-inverse-trig",
            title: "6. Composition of (Inverse) Trigonometric Values",
            content: `<strong>Perfect Inverse Relationships:</strong>
          - arcsin(sin(x)) = x (when x ∈ [-π/2, π/2])
          - sin(arcsin(x)) = x (when x ∈ [-1, 1])
          - arccos(cos(x)) = x (when x ∈ [0, π])
          - cos(arccos(x)) = x (when x ∈ [-1, 1])

          <strong>Non-Matching Compositions:</strong>
          Using trigonometric identities:
          - sin(arccos(x)) = √(1 - x²)
          - cos(arctan(x)) = 1/√(1 + x²)
          - tan(arcsin(x)) = x/√(1 - x²)`,
          },
        ],
      },
      {
        id: "week-2",
        title: "Week 2: Introduction to Derivatives",
        content: `This week introduces the fundamental concept of derivatives, which measures how functions change. The derivative is one of the most important concepts in calculus.

      <strong>Key Topics Covered:</strong>
      - Rate of change and instantaneous rate of change
      - Definition of the derivative
      - Context and interpretation of derivatives
      - Tangent lines and their relationship to derivatives
      - Standard derivatives and computation rules
      - Implicit differentiation
      - Derivatives of inverse trigonometric functions`,
        subsections: [
          {
            id: "rate-of-change",
            title: "Rate of Change",
            content: `<strong>Definition:</strong> The rate of change of the function y = f(x) over the interval [a,b] is given by:
          $$\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}$$

          This represents the average rate of change of the function over the given interval.

          <strong>Geometric Interpretation:</strong>
          The rate of change represents the slope of the secant line connecting the points (a, f(a)) and (b, f(b)) on the graph of f(x).`,
          },
          {
            id: "instantaneous-rate-of-change",
            title: "Instantaneous Rate of Change",
            content: `<strong>Definition:</strong> Letting the width Δx of the interval [a,b] approach 0, the rate of change of the function f(x) will approach the derivative f'(a) at the point a:
          $$f'(a) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{b \\to a} \\frac{f(b) - f(a)}{b - a}$$

          <strong>Geometric Interpretation:</strong>
          As we make the interval smaller and smaller, the secant line approaches the tangent line. The instantaneous rate of change is the slope of the tangent line at that point.`,
          },
          {
            id: "derivative-at-point",
            title: "Derivative at a Point",
            content: `<strong>Definition:</strong> Given a function f(x), the tangent line to the graph of f at the point a in the domain is given by the equation:
          $$y = f(a) + f'(a)(x - a)$$

          <strong>Slope of Tangent Line:</strong>
          The slope of the tangent line to the function f at the point a is denoted by f'(a) or df/dx(a) and called the derivative of f at a.

          <strong>Cases Where Derivatives Don't Exist:</strong>
          - Jump discontinuity
          - Kink or corner (like |x| at x = 0)
          - Vertical tangent`,
          },
          {
            id: "standard-derivatives",
            title: "Standard Derivatives",
            content: `<strong>Power Rule:</strong>
          $$(x^r)' = rx^{r-1}$$ for any real value r

          <strong>Exponential Functions:</strong>
          - $$(e^x)' = e^x$$
          - $$[e^{u(x)}]' = e^{u(x)} \\cdot u'(x)$$

          <strong>Logarithmic Functions:</strong>
          - $$(\\ln x)' = \\frac{1}{x}$$
          - $$[\\ln(u(x))]' = \\frac{1}{u(x)} \\cdot u'(x)$$

          <strong>Trigonometric Functions:</strong>
          - $$(\\sin x)' = \\cos x$$
          - $$(\\cos x)' = -\\sin x$$`,
          },
          {
            id: "computation-rules",
            title: "Computation Rules for Derivatives",
            content: `Derivatives are represented with the notation $'$ or $\\frac{d}{dx}$. They can also appear as $\\frac{df}{dx}$ and other possible ways. Here are some key rules:
            <strong>Constant Multiple Rule:</strong>
          $$(cf(x))' = cf'(x)$$

          <strong>Reciprocal Rule:</strong>
          $$\\left(\\frac{1}{f(x)}\\right)' = \\frac{-f'(x)}{(f(x))^2}$$

          <strong>Sum Rule:</strong>
          $$(f(x) + g(x))' = f'(x) + g'(x)$$

          <strong>Product Rule:</strong>
          $$(f(x)g(x))' = f'(x)g(x) + f(x)g'(x)$$

          <strong>Quotient Rule:</strong>
          $$\\left(\\frac{f(x)}{g(x)}\\right)' = \\frac{f'(x)g(x) - f(x)g'(x)}{(g(x))^2}$$

          <strong>Chain Rule:</strong>
          $$[f(g(x))]' = f'(g(x))g'(x)$$`,
          },
          {
            id: "implicit-differentiation",
            title: "Implicit Differentiation",
            content: `<strong>When to Use:</strong>
          For equations like x² + y² = 9 where y is not explicitly solved for.

          <strong>Method:</strong>
          1. Differentiate both sides with respect to x
          2. Apply chain rule when differentiating terms involving y
          3. Solve for dy/dx

          <strong>Example: Circle x² + y² = 9</strong>
          Differentiating: 2x + 2y(dy/dx) = 0
          Solving: dy/dx = -x/y`,
          },
          {
            id: "derivatives-inverse-trig",
            title: "Derivatives of Inverse Trigonometric Functions",
            content: `<strong>Standard Derivatives:</strong>
          $$\\frac{d}{dx} \\arcsin(x) = \\frac{1}{\\sqrt{1 - x²}}$$
          
          $$\\frac{d}{dx} \\arccos(x) = \\frac{-1}{\\sqrt{1 - x²}}$$
          
          $$\\frac{d}{dx} \\arctan(x) = \\frac{1}{1 + x²}$$

          <strong>Derivation Method:</strong>
          Start with y = arcsin(x), so sin(y) = x
          Differentiate: cos(y) dy/dx = 1
          Therefore: dy/dx = 1/cos(y) = 1/√(1 - x²)`,
          },
        ],
      },
      {
        id: "week-3",
        title: "Week 3: Introduction to Integrals",
        content: `This week introduces integration, which is the reverse process of differentiation. Integration has many applications including finding areas, solving differential equations, and calculating averages.

      <strong>Key Topics Covered:</strong>
      - Interpretation of integrals as signed area
      - Definition and notation of integrals
      - Computation rules for integrals
      - Anti-derivatives and the Fundamental Theorem of Calculus
      - Substitution rule and integration by parts
      - Taylor polynomial approximations for integrals
      - Integration over unbounded regions`,
        subsections: [
          {
            id: "interpretation-integral",
            title: "Interpretation of the Integral",
            content: `Integration is the opposite operation of differentiation. Interpretations include:
          - <strong>Signed area</strong> under a curve
          - <strong>Accumulation</strong> of a quantity over time
          - <strong>Total change</strong> from a rate of change

          <strong>Physical Applications:</strong>
          - If f(t) represents velocity, then ∫f(t)dt represents displacement
          - If f(t) represents acceleration, then ∫f(t)dt represents change in velocity`,
          },
          {
            id: "definition-notation",
            title: "Definition and Notation",
            content: `<strong>Notation:</strong>
          $$\\int_a^b f(x)dx$$

          <strong>Components:</strong>
          - [a,b] is the interval of integration
          - ∫ is the integral sign
          - a is the lower bound, b is the upper bound
          - f(x) is the integrand
          - dx indicates the variable of integration

          <strong>Area Interpretation:</strong>
          For non-negative f(x), ∫ᵃᵇ f(x)dx equals the area between the graph of f and the x-axis over [a,b].`,
          },
          {
            id: "computation-rules-integrals",
            title: "Computation Rules",
            content: `<strong>Sum Rule:</strong>
          $$\\int_a^b (f(x) + g(x))dx = \\int_a^b f(x)dx + \\int_a^b g(x)dx$$

          <strong>Scalar Multiplication:</strong>
          $$\\int_a^b cf(x)dx = c\\int_a^b f(x)dx$$

          <strong>Union of Intervals:</strong>
          $$\\int_a^b f(x)dx + \\int_b^c f(x)dx = \\int_a^c f(x)dx$$

          <strong>Properties:</strong>
          - ∫ᵃᵃ f(x)dx = 0
          - ∫ᵃᵇ f(x)dx = -∫ᵇᵃ f(x)dx`,
          },
          {
            id: "fundamental-theorem",
            title: "Fundamental Theorem of Calculus",
            content: `<strong>Version 1:</strong>
          If f(x) is integrable over [a,b], then
          $$F(x) = \\int_a^x f(t)dt$$
          is an anti-derivative of f(x), i.e., F'(x) = f(x).

          <strong>Version 2:</strong>
          If f(x) is integrable over [a,b], then
          $$\\int_a^b f(x)dx = F(b) - F(a)$$
          where F(x) is any anti-derivative of f(x).

          <strong>Example:</strong>
          $$\\int_0^{\\pi/2} \\cos(x)dx = \\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$$`,
          },
          {
            id: "substitution-rule",
            title: "Substitution Rule",
            content: `<strong>Method:</strong>
          $$\\int F'(g(x))g'(x)dx = \\int F'(u)du = F(u) + C = F(g(x)) + C$$
          where u = g(x) and du = g'(x)dx

          <strong>Steps:</strong>
          1. Check for form f(g(x))g'(x)
          2. Substitute u = g(x), du = g'(x)dx
          3. Find anti-derivative in terms of u
          4. Substitute back

          <strong>Example:</strong>
          ∫ x/(1+x⁴) dx with u = x²:
          = (1/2)∫ 1/(1+u²) du = (1/2)arctan(u) + C = (1/2)arctan(x²) + C`,
          },
          {
            id: "integration-by-parts",
            title: "Integration by Parts",
            content: `<strong>Formula:</strong>
          $$\\int udv = uv - \\int vdu$$

          <strong>LIATE Rule for choosing u:</strong>
          1. <strong>L</strong>ogarithmic (ln(x))
          2. <strong>I</strong>nverse trig (arcsin(x))
          3. <strong>A</strong>lgebraic (x², √x)
          4. <strong>T</strong>rigonometric (sin(x), cos(x))
          5. <strong>E</strong>xponential (eˣ)

          <strong>Example: ∫ x ln(x) dx</strong>
          u = ln(x), dv = x dx
          du = (1/x)dx, v = x²/2
          = (x² ln(x))/2 - (1/2)∫ x dx = (x²/2)(ln(x) - 1/2)`,
          },
          {
            id: "taylor-approximation-integrals",
            title: "Taylor Polynomial Approximations",
            content: `<strong>Problem:</strong>
          Some functions like cos(x²), sin(x²), e^(-x²) cannot be integrated in terms of elementary functions.

          <strong>Solution:</strong>
          Approximate using Taylor polynomials.

          <strong>Theorem:</strong>
          If Tₙ(x) is the nth Taylor polynomial of f(x), then ∫Tₙ(x)dx is the (n+1)th order Taylor polynomial of an anti-derivative of f(x).

          <strong>Approach:</strong>
          1. Compute Taylor polynomial Tₙ(x) for f(x)
          2. Compute ∫ᵇᶜ Tₙ(x)dx as approximation
          3. Use Taylor's inequality to bound error`,
          },
          {
            id: "unbounded-domains",
            title: "Integration over Unbounded Regions",
            content: `<strong>Improper Integrals:</strong>
          $$\\int_a^\\infty f(x)dx = \\lim_{b \\to \\infty} \\int_a^b f(x)dx$$
          $$\\int_{-\\infty}^b f(x)dx = \\lim_{a \\to -\\infty} \\int_a^b f(x)dx$$
          $$\\int_{-\\infty}^\\infty f(x)dx = \\int_{-\\infty}^c f(x)dx + \\int_c^\\infty f(x)dx$$

          <strong>Convergence:</strong>
          - Integral converges if limits are finite
          - Integral diverges otherwise

          <strong>Standard Examples:</strong>
          - ∫₀^∞ e^(-x) dx = 1 (converges)
          - ∫₁^∞ (1/x^p) dx converges when p > 1, diverges when p ≤ 1`,
          },
        ],
      },
      {
        id: "week-4",
        title: "Week 4: Approximating Function Values",
        content: `This week focuses on approximating function values using various mathematical techniques. These methods are essential when exact calculations are difficult or impossible.

      <strong>Key Topics Covered:</strong>
      - Definition of approximation and approximation error
      - Concept of relative approximation error
      - Linearization of functions
      - Differentials and their applications
      - Taylor polynomials and their computation
      - Taylor's inequality for approximation error`,
        subsections: [
          {
            id: "approximating-function-values",
            title: "Approximating Function Values",
            content: `<strong>Motivation:</strong>
          Consider f(x) = √x. We can easily calculate f(36) = 6, f(100) = 10, but how do we find f(101)?

          <strong>Challenges:</strong>
          - Some decimal expansions have no repeating patterns
          - Computation can be time-consuming or resource-intensive
          - Exact values may not be necessary

          <strong>Solution:</strong>
          Use approximations: √101 ≈ √100 = 10 (simple) or √101 ≈ 10.05 (better)`,
          },
          {
            id: "approximation-error",
            title: "Approximation Error",
            content: `<strong>Definition:</strong>
          An approximation of f(a) is a real number f̂(a) that is "close" to f(a).
          We write f(a) ≈ f̂(a).

          <strong>Absolute Approximation Error:</strong>
          $$E = |f(a) - \\hat{f}(a)|$$

          <strong>Relative Approximation Error:</strong>
          $$\\eta = \\left|\\frac{f(a) - \\hat{f}(a)}{f(a)}\\right|$$

          <strong>Examples:</strong>
          - If √101 ≈ 10, then E = |√101 - 10| ≤ 0.05
          - If √101 ≈ 10.05, then E = |√101 - 10.05| ≤ 0.000125`,
          },
          {
            id: "linearization",
            title: "Linearization",
            content: `<strong>Concept:</strong>
          When we zoom in close enough to any smooth curve, it appears almost like a straight line.

          <strong>Definition:</strong>
          The linearization of f at a is:
          $$L(x) = f(a) + f'(a)(x - a)$$

          This is the equation of the tangent line at x = a.

          <strong>Example:</strong>
          To approximate √101 using a = 100:
          - f(x) = √x, f'(x) = 1/(2√x)
          - f(100) = 10, f'(100) = 1/20
          - L(x) = 10 + (1/20)(x - 100)
          - √101 ≈ L(101) = 10 + (1/20)(1) = 10.05`,
          },
          {
            id: "differentials",
            title: "Differentials",
            content: `<strong>Definition:</strong>
          The differential of f is: dy = df = f'(x)dx

          <strong>Approximation:</strong>
          Δy = f(x₀ + Δx) - f(x₀) ≈ dy = f'(x₀)dx

          <strong>Error Analysis:</strong>
          - <strong>Approximate absolute error:</strong> df = f'(x)dx
          - <strong>Approximate relative error:</strong> df/f(x) = [f'(x)/f(x)]dx

          <strong>Example:</strong>
          For f(x) = x², x = 5, dx = 0.1:
          df = 2(5)(0.1) = 1
          Actual: f(5.1) - f(5) = 26.01 - 25 = 1.01`,
          },
          {
            id: "taylor-polynomials",
            title: "Taylor Polynomials",
            content: `<strong>Definition:</strong>
          The nth order Taylor polynomial of f at point a is:
          $$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$$

          <strong>Expanded Form:</strong>
          $$T_n(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n$$

          <strong>Special Cases:</strong>
          - T₀(x) = f(a) (constant approximation)
          - T₁(x) = f(a) + f'(a)(x-a) (linearization)
          - T₂(x) adds the quadratic term

          <strong>Basic Property:</strong>
          f^(k)(a) = T_n^(k)(a) for k = 0, 1, ..., n`,
          },
          {
            id: "computation-rules-taylor",
            title: "Computation Rules for Taylor Polynomials",
            content: `<strong>Sum Rule:</strong>
          If f(x) = g(x) + h(x), then Tₙ(x) = T_g^n(x) + T_h^n(x)

          <strong>Product Rule:</strong>
          If f(x) = (x-a)·g(x), then T_{n+1}(x) = (x-a)·T_g^n(x)

          <strong>Substitution Rule:</strong>
          If f(x) = g((x-a)ᵏ), then the Taylor polynomial involves powers of (x-a)^(k·i)

          <strong>Example: f(x) = x cos(x²)</strong>
          1. cos(x) ≈ 1 - x²/2 (2nd order at x = 0)
          2. cos(x²) ≈ 1 - x⁴/2 (4th order)
          3. x cos(x²) ≈ x - x⁵/2 (5th order)

          This is much more efficient than computing derivatives directly!`,
          },
          {
            id: "taylors-inequality",
            title: "Taylor's Inequality",
            content: `<strong>Approximation Error:</strong>
          $$R_n(x) = |f(x) - T_n(x)|$$

          <strong>Taylor's Inequality:</strong>
          If |f^(n+1)(x)| ≤ M for all x in an interval D containing a, then:
          $$|f(x) - T_n(x)| \\leq \\frac{M}{(n+1)!}|x-a|^{n+1}$$

          <strong>Applications:</strong>
          1. Bound the error in approximations
          2. Determine how many terms needed for desired accuracy
          3. Choose center point a to minimize error

          <strong>Example:</strong>
          For sin(0.1) using T₃(x) = x - x³/6:
          Error bound ≤ (1/4!)(0.1)⁴ ≈ 0.0000042`,
          },
        ],
      },
      {
        id: "week-5",
        title: "Week 5: Limits and Asymptotes",
        content: `This week explores the behavior of functions as their inputs approach infinity or specific values. Understanding limits and asymptotes is crucial for analyzing long-term behavior of functions.

      <strong>Key Topics Covered:</strong>
      - Definition of horizontal asymptotes
      - Relationship between horizontal asymptotes and limits
      - Growth rates and their comparison
      - Computation rules and standard limits
      - Dominance and the dominant term method
      - Squeeze theorem and its applications`,
        subsections: [
          {
            id: "horizontal-asymptotes",
            title: "Horizontal Asymptotes",
            content: `<strong>Example: Newton's Law of Cooling</strong>
          T(t) = T_env + (T(0) - T_env)e^(-rt)

          For a refrigerator at 5°C with object initially at 20°C:
          T(t) = 5 + 15e^(-t)

          As t → ∞, e^(-t) → 0, so T(t) → 5. The line y = 5 is a horizontal asymptote.

          <strong>Definition:</strong>
          f(x) has a horizontal asymptote at y = a if |f(x) - a| → 0 as x → ∞ or x → -∞.

          <strong>Notation:</strong>
          $$\\lim_{x \\to \\infty} f(x) = a$$ or $$\\lim_{x \\to -\\infty} f(x) = a$$

          <strong>Note:</strong>
          A function can have 0, 1, or 2 distinct horizontal asymptotes.`,
          },
          {
            id: "growth-rates",
            title: "Growth Rates",
            content: `<strong>Definition:</strong>
          For functions p_A(x) and p_B(x) that grow as x increases:

          - If lim(x→∞) p_A(x)/p_B(x) = 0, then p_B has higher growth rate
          - If lim(x→∞) p_A(x)/p_B(x) = c > 0, then they have same growth rate
          - If p_A(x)/p_B(x) keeps increasing, then p_A has higher growth rate

          <strong>Examples:</strong>
          - x² vs x: lim(x→∞) x/x² = 0, so x² grows faster
          - 2x vs 3x: lim(x→∞) 2x/3x = 2/3, same growth rate
          - eˣ vs xⁿ: lim(x→∞) xⁿ/eˣ = 0, so eˣ grows faster`,
          },
          {
            id: "computation-rules-limits",
            title: "Computation Rules and Standard Limits",
            content: `<strong>Computation Rules:</strong>
          If lim(x→∞) f(x) = a and lim(x→∞) g(x) = b, then:
          - Sum: lim(x→∞) [f(x) + g(x)] = a + b
          - Product: lim(x→∞) f(x)g(x) = ab
          - Quotient: lim(x→∞) f(x)/g(x) = a/b (if b ≠ 0)
          - Scalar: lim(x→∞) cf(x) = ca

          <strong>Standard Limits:</strong>
          For r > 0 and positive integer k:
          - lim(x→±∞) c = c
          - lim(x→∞) 1/xʳ = 0
          - lim(x→∞) e^(-rx) = 0
          - lim(x→-∞) e^(rx) = 0`,
          },
          {
            id: "dominance",
            title: "Dominance",
            content: `<strong>Hierarchy of Dominance (increasing growth rates):</strong>
          B < ln(x) < ln²(x) < √x < x < x ln(x) < x² < x³ < eˣ < xˣ < (eˣ)²

          Where B represents bounded functions like cos(x), sin(x), e^(-x), constants, 1/x.

          <strong>Method:</strong>
          1. Identify dominant term in numerator and denominator
          2. Factor out dominant terms
          3. Divide by overall dominant term
          4. Apply standard limits

          <strong>Example:</strong>
          $$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x + 1}{2x^2 - x + 7}$$

          Divide by x² (dominant term):
          $$= \\lim_{x \\to \\infty} \\frac{3 + 5/x + 1/x^2}{2 - 1/x + 7/x^2} = \\frac{3}{2}$$`,
          },
          {
            id: "squeeze-theorem",
            title: "Squeeze Theorem",
            content: `<strong>Example: Damped Oscillation</strong>
          $$x(t) = e^{-t/10}\\left(\\cos(t) + \\frac{1}{10}\\sin(t)\\right)$$

          This is bounded by: $$-\\frac{11}{10}e^{-t/10} \\leq x(t) \\leq \\frac{11}{10}e^{-t/10}$$

          As t → ∞, both bounds approach 0, so x(t) → 0.

          <strong>Squeeze Theorem:</strong>
          If g(x) ≤ f(x) ≤ h(x) for x > M, and lim(x→∞) g(x) = lim(x→∞) h(x) = a, then lim(x→∞) f(x) = a.

          <strong>Example:</strong>
          Find lim(x→∞) sin(x)/x

          Since -1 ≤ sin(x) ≤ 1: -1/x ≤ sin(x)/x ≤ 1/x
          Since lim(x→∞) (±1/x) = 0, we get lim(x→∞) sin(x)/x = 0`,
          },
        ],
      },
      {
        id: "week-6",
        title: "Week 6: Differential Equations",
        content: `This week introduces differential equations, which are equations involving functions and their derivatives. They are fundamental in modeling real-world phenomena.

      <strong>Key Topics Covered:</strong>
      - Definition and classification of differential equations
      - Order, initial value problems, and equilibrium solutions
      - Direction fields and autonomous equations
      - Separable differential equations
      - First-order and second-order linear equations
      - Method of undetermined coefficients
      - Taylor polynomial approximations for solutions`,
        subsections: [
          {
            id: "introduction-differential-equations",
            title: "Introduction to Differential Equations",
            content: `<strong>Definition:</strong>
          A differential equation has the form:
          $$F(x, y, y', y'', \\ldots, y^{(n)}) = 0$$
          where y = y(x) is a function of x.

          <strong>Terminology:</strong>
          - n is the <strong>order</strong> of the equation
          - x is the <strong>independent variable</strong>
          - y is the <strong>dependent variable</strong>

          <strong>General Solution:</strong>
          A formula y(x) depending on n arbitrary constants c₁, ..., cₙ such that any particular solution is obtained by choosing appropriate values for the constants.

          <strong>Initial Value Problem:</strong>
          A differential equation with prescribed values:
          y(a) = y₀, y'(a) = y₁, ..., y^(n-1)(a) = yₙ₋₁`,
          },
          {
            id: "direction-fields",
            title: "Direction Fields",
            content: `<strong>Definition:</strong>
          For F(x, y, y') = 0, a direction field shows small line segments with slope y' at points (a, b) in the plane.

          <strong>Autonomous Equations:</strong>
          Equations that don't depend explicitly on the independent variable:
          F(y, y', ..., y^(n)) = 0

          <strong>Equilibrium Solutions:</strong>
          Solutions where y'(x) = 0 (constant solutions).

          <strong>Example:</strong>
          T' = -(T - 5) has equilibrium T = 5 (found by setting T' = 0)`,
          },
          {
            id: "separable-equations",
            title: "Separable Differential Equations",
            content: `<strong>Definition:</strong>
          Equations where dy/dx can be written as f(x)/h(y).

          <strong>Solution Algorithm:</strong>
          1. Write as dy/dx = f(x)/h(y)
          2. Separate: h(y)dy = f(x)dx
          3. Integrate both sides: ∫h(y)dy = ∫f(x)dx
          4. Solve for y if possible

          <strong>Example:</strong>
          dy/dx = xy
          Separate: dy/y = x dx
          Integrate: ln|y| = x²/2 + C
          Solution: y = Ae^(x²/2)`,
          },
          {
            id: "first-order-linear",
            title: "First Order Linear Differential Equations",
            content: `<strong>Standard Form:</strong>
          $$\\frac{dy}{dx} + P(x)y = Q(x)$$

          <strong>Integrating Factor:</strong>
          $$I(x) = e^{\\int P(x)dx}$$

          <strong>Solution Algorithm:</strong>
          1. Write in standard form
          2. Find integrating factor I(x)
          3. Multiply equation by I(x): [I(x)y]' = I(x)Q(x)
          4. Integrate: I(x)y = ∫I(x)Q(x)dx
          5. Solve for y: y = (1/I(x))∫I(x)Q(x)dx`,
          },
          {
            id: "second-order-linear",
            title: "Second Order Linear Differential Equations",
            content: `<strong>General Form:</strong>
          $$a(x)y'' + b(x)y' + c(x)y = F(x)$$

          <strong>Homogeneous:</strong> F(x) = 0
          <strong>Non-homogeneous:</strong> F(x) ≠ 0

          <strong>Solution Structure:</strong>
          - Homogeneous: y = c₁y₁ + c₂y₂ (if y₁, y₂ linearly independent)
          - Non-homogeneous: y = yₚ + c₁y₁ + c₂y₂

          <strong>Constant Coefficients:</strong>
          For ay'' + by' + cy = 0, use characteristic equation ar² + br + c = 0

          <strong>Cases:</strong>
          - Two distinct real roots: y = c₁e^(r₁x) + c₂e^(r₂x)
          - Repeated root: y = (c₁ + c₂x)e^(rx)
          - Complex roots r = α ± βi: y = e^(αx)(c₁cos(βx) + c₂sin(βx))`,
          },
          {
            id: "undetermined-coefficients",
            title: "Method of Undetermined Coefficients",
            content: `<strong>Purpose:</strong>
          Find particular solutions to non-homogeneous linear equations with constant coefficients.

          <strong>Basic Ansätze:</strong>
          | Right Hand Side | Ansatz |
          |----------------|--------|
          | Polynomial | Polynomial of same degree |
          | e^(kx) | Ae^(kx) |
          | cos(ωx), sin(ωx) | Acos(ωx) + Bsin(ωx) |

          <strong>Algorithm:</strong>
          1. Make ansatz with undetermined coefficients
          2. Substitute into differential equation
          3. Solve for coefficients

          <strong>Modification Rule:</strong>
          If ansatz solves homogeneous equation, multiply by x (or x²)`,
          },
          {
            id: "taylor-approximation-de",
            title: "Taylor Polynomial Approximations",
            content: `<strong>Strategy:</strong>
          For initial value problems, construct Taylor polynomial:
          $$T_m(x) = \\sum_{k=0}^{m} \\frac{y^{(k)}(a)}{k!}(x-a)^k$$

          <strong>Process:</strong>
          1. Use initial conditions for y^(k)(a), k = 0, ..., n-1
          2. Find higher derivatives by differentiating the DE
          3. Evaluate at x = a using known values

          <strong>Example:</strong>
          y' = x + y², y(0) = 1
          - y(0) = 1
          - y'(0) = 0 + 1² = 1
          - y''(0) = 1 + 2yy' = 1 + 2(1)(1) = 3
          - T₂(x) = 1 + x + (3/2)x²`,
          },
        ],
      },
    ],
    category: "math",
    categoryName: "Mathematics",
    date: "February 12, 2024",
    tags: ["Calculus", "Differential Equations", "Solution Methods", "Modeling"],
  },
  {
    id: "9",
    title: "Calculus II - Complete Course",
    description:
      "Complete Calculus II course covering multivariable functions, partial derivatives, multiple integrals, extreme values, and directional derivatives",
    sections: [
      {
        id: "week-1",
        title: "Week 1: Multivariable Functions",
        content: `This week introduces functions of several variables, extending our understanding from single-variable calculus to multivariable calculus. We explore how to visualize and analyze functions that depend on multiple inputs.

    <strong>Key Topics Covered:</strong>
    - Definition of functions of several variables
    - Domain, maximal domain, and range for multivariable functions
    - Graphs of functions of two variables
    - Level curves and contour plots
    - Visualization techniques for multivariable functions

    <strong>Learning Objectives:</strong>
    By the end of this week, you should be able to:
    - Define and work with functions of several variables
    - Find domains and ranges of multivariable functions
    - Interpret and create graphs of two-variable functions
    - Construct and interpret level curves and contour plots
    - Visualize multivariable functions using various techniques`,
        subsections: [
          {
            id: "multivariable-functions",
            title: "1. Multivariable Functions",
            content: `<strong>Definition:</strong>
        A function f: ℝⁿ → ℝ associates to each point (x₁, x₂, ..., xₙ) in its domain exactly one number f(x₁, ..., xₙ).

        <strong>Formula Example with One Variable:</strong>
        Falling Object: H(t) = 200 - 5t²
        H(5) = 200 - ½ · 10 · 5² = 75

        <strong>Formula Example with Several Variables:</strong>
        Falling Object: H(h, t, g) = h - ½gt²
        H(200, 5, 10) = 200 - ½ · 10 · 5² = 75

        <strong>Maximal Domain:</strong>
        The maximal domain of f(x₁, ..., xₙ) consists of all points (x₁, x₂, ..., xₙ) ∈ ℝⁿ for which the formula for f produces a real number.

        <strong>Example:</strong>
        Consider the function f given by:
        $$f(x_1, x_2, x_3, x_4) = \\frac{\\sqrt{x_1 + 1} - \\ln(4 - x_2^2 - x_3^2)}{x_4^2 - 2}$$

        The maximal domain consists of all points (x₁, x₂, x₃, x₄) such that:
        - x₁ ≥ -1
        - x₂² + x₃² < 4
        - x₄ ≠ √2 and x₄ ≠ -√2

        <strong>Range:</strong>
        The range R of a function f: D → ℝ for D ⊂ ℝⁿ is the set of all possible values of f(x₁, ..., xₙ) for (x₁, ..., xₙ) ∈ D:
        $$R = \\{f(x_1, ..., x_n) | (x_1, ..., x_n) ∈ D\\}$$`,
          },
          {
            id: "graphs-multivariable",
            title: "2. Graphs of Multivariable Functions",
            content: `<strong>Graph (2 Dimensional):</strong>
        The graph of a function f of one variable with domain D is the set:
        $$\\{(x, y) | x ∈ D \\text{ and } y = f(x)\\}$$

        In a 2D graph, we can identify:
        - Minimum (lowest point on the graph)
        - Root (x-intercept)
        - Maximum (highest point on the graph)

        <strong>Graph (3 Dimensional):</strong>
        The graph of a function f of two variables with domain D is the set:
        $$\\{(x, y, z) | (x, y) ∈ D \\text{ and } z = f(x, y)\\}$$

        <strong>Visualization Challenges:</strong>
        - 2D functions create curves in 3D space
        - 3D functions create surfaces in 4D space (difficult to visualize)
        - We need alternative methods like level curves and contour plots

        <strong>Examples of 3D Surfaces:</strong>
        - Paraboloids: z = x² + y²
        - Saddle surfaces: z = x² - y²
        - Planes: z = ax + by + c
        - Cylinders: z = x² (independent of y)`,
          },
          {
            id: "contour-plots",
            title: "3. Contour Plots",
            content: `<strong>Drawing the Graph of f(x,y):</strong>
        1. Take a point (x, y) in the domain of f
        2. Calculate z = f(x, y)
        3. Plot all points (x, y, z)

        <strong>Constructing a Contour Plot of f(x,y):</strong>
        Take a level on the 3-dimensional graph and your contour is there.

        <strong>Definition:</strong>
        A level curve of a function f of two variables is a curve in ℝ² with equation f(x, y) = K, where K is a constant (in the range of f). A plot with several level curves is called a contour map.

        <strong>Level Curves and Contour Maps:</strong>
        - Level curves show where the function has constant values
        - Contour maps are like topographic maps showing elevation
        - Closely spaced contours indicate steep changes
        - Widely spaced contours indicate gradual changes

        <strong>Interpreting Contour Plots:</strong>
        - Circular/elliptical contours often indicate local maxima or minima
        - Saddle-shaped contours indicate saddle points
        - Parallel straight contours indicate linear behavior
        - The direction perpendicular to contours shows steepest ascent/descent

        <strong>Applications:</strong>
        - Weather maps (temperature, pressure)
        - Topographic maps (elevation)
        - Economic analysis (profit/cost functions)
        - Engineering (stress, temperature distribution)`,
          },
        ],
      },
      {
        id: "week-2",
        title: "Week 2: Partial Derivatives",
        content: `This week introduces partial derivatives, which extend the concept of derivatives to functions of multiple variables. We learn how to find rates of change in specific directions and create linear approximations.

    <strong>Key Topics Covered:</strong>
    - Definition of partial derivatives
    - Tangent planes and linearization
    - Differentials and approximations
    - Higher-order partial derivatives
    - Clairaut's theorem
    - Chain rule for partial derivatives

    <strong>Learning Objectives:</strong>
    By the end of this week, you should be able to:
    - Calculate first-order partial derivatives
    - Find equations of tangent planes
    - Use linearization for approximations
    - Compute higher-order partial derivatives
    - Apply the chain rule for multivariable functions`,
        subsections: [
          {
            id: "first-order-partial",
            title: "1. First Order Partial Derivatives",
            content: `<strong>Partial Derivative (Two Variables):</strong>
        The partial derivative of the function f(x,y) with respect to x at the point (x₀,y₀) is given by g'(x₀) where g(x) = f(x,y₀).

        Similarly, the partial derivative with respect to y at (x₀,y₀) is given by h'(y₀) where h(y) = f(x₀,y).

        <strong>Partial Derivative Limits:</strong>
        $$g'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$$
        $$h'(y_0) = \\lim_{h \\to 0} \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$$

        <strong>General Definition:</strong>
        The partial derivative of the function f(x₁, ..., xₙ) with respect to xᵢ at the point (a₁, ..., aₙ) is given by g'(aᵢ) where:
        $$g(x) = f(a_1, ..., a_{i-1}, x, a_{i+1}, ..., a_n)$$

        <strong>Partial Derivative Notation:</strong>
        Partial derivative with respect to x:
        $$f_x(x_0, y_0) = \\frac{\\partial f}{\\partial x}(x_0, y_0) = \\frac{\\partial}{\\partial x}f(x_0, y_0) = D_x f(x_0, y_0) = f_1(x_0, y_0)$$

        Partial derivative with respect to y:
        $$f_y(x_0, y_0) = \\frac{\\partial f}{\\partial y}(x_0, y_0) = \\frac{\\partial}{\\partial y}f(x_0, y_0) = D_y f(x_0, y_0) = f_2(x_0, y_0)$$

        <strong>Notation Symbols:</strong>
        - "d" → dee (total derivative)
        - "δ" → delta
        - "∂" → del (partial derivative)`,
          },
          {
            id: "tangent-plane-linearization",
            title: "2. Tangent Plane and Linearization",
            content: `<strong>Tangent Line (One Variable):</strong>
        $$y = f(x_0) + f'(x_0)(x - x_0)$$

        <strong>3D Representation:</strong>
        When y = y₀: z = f(x₀, y₀) + fₓ(x₀, y₀)(x - x₀)
        When x = x₀: z = f(x₀, y₀) + f_y(x₀, y₀)(y - y₀)

        <strong>Tangent Plane:</strong>
        The equation of the tangent plane is:
        $$z = f(x_0, y_0) + f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$$

        <strong>Linearization - Two Variables:</strong>
        The linearization of f at (x₀, y₀) is:
        $$L(x, y) = f(x_0, y_0) + f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$$

        where:
        - L(x₀, y₀) = f(x₀, y₀)
        - Lₓ(x₀, y₀) = fₓ(x₀, y₀)
        - L_y(x₀, y₀) = f_y(x₀, y₀)

        <strong>General Definition:</strong>
        The linearization of a function f(x₁, ..., xₙ) at the point (a₁, ..., aₙ) is the unique linear function L(x₁, ..., xₙ) such that:
        - L(a₁, ..., aₙ) = f(a₁, ..., aₙ)
        - L_{x_i}(a₁, ..., aₙ) = f_{x_i}(a₁, ..., aₙ) for all i = 1, ..., n

        <strong>Formula:</strong>
        $$L(x_1, ..., x_n) = f(a_1, ..., a_n) + \\sum_{i=1}^{n} f_{x_i}(a_1, ..., a_n)(x_i - a_i)$$

        <strong>Differential:</strong>
        Given a function z = f(x, y), the differential dz = df of f is given by:
        $$dz = df = f_x(x, y)dx + f_y(x, y)dy$$

        <strong>Approximation:</strong>
        If we set x = x₀, y = y₀, dx = Δx, and dy = Δy, we obtain:
        $$\\Delta z = f(x_0 + \\Delta x, y_0 + \\Delta y) - f(x_0, y_0) \\approx dz$$

        <strong>Higher Order (Note):</strong>
        A similar notion for functions of several variables exists, e.g.:
        $$T_2(x, y) = L(x, y) + \\frac{1}{2}f_{xx}(x_0, y_0)(x - x_0)^2 + f_{xy}(x_0, y_0)(x - x_0)(y - y_0) + \\frac{1}{2}f_{yy}(x_0, y_0)(y - y_0)^2$$`,
          },
          {
            id: "higher-order-partial",
            title: "3. Higher Order Partial Derivatives",
            content: `<strong>Second Order Partial Derivatives:</strong>
        
        <strong>Notation:</strong>
        - (fₓ)ₓ = f_{xx} = ∂/∂x(∂f/∂x) = ∂²f/∂x² = ∂²z/∂x²
        - (fₓ)_y = f_{xy} = ∂/∂y(∂f/∂x) = ∂²f/∂y∂x = ∂²z/∂y∂x
        - (f_y)ₓ = f_{yx} = ∂/∂x(∂f/∂y) = ∂²f/∂x∂y = ∂²z/∂x∂y
        - (f_y)_y = f_{yy} = ∂/∂y(∂f/∂y) = ∂²f/∂y² = ∂²z/∂y²

        <strong>Higher-Order Derivatives:</strong>
        Consider the function f(x, y, z):
        $$f_{zyxy} = \\left(\\left(\\left(f_z\\right)_y\\right)_x\\right)_y = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial}{\\partial x}\\left(\\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial z}\\right)\\right)\\right) = \\frac{\\partial^4 f}{\\partial y \\partial x \\partial y \\partial z}$$

        <strong>Clairaut's Theorem:</strong>
        If the function f has continuous second-order partial derivatives, then:
        $$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$$

        <strong>Remark:</strong>
        The theorem can be generalized to higher-order derivatives, and to functions of more than two variables.

        <strong>Practical Implication:</strong>
        For functions with continuous partial derivatives, the order of differentiation doesn't matter. This greatly simplifies calculations and is why we can write f_{xy} = f_{yx}.

        <strong>Applications:</strong>
        - Simplifies computation of mixed partial derivatives
        - Essential for Taylor series in multiple variables
        - Important in optimization and differential equations
        - Used in physics for potential functions and field theory`,
          },
          {
            id: "chain-rule-partial",
            title: "4. The Chain Rule For Partial Derivatives",
            content: `<strong>Chain Rule - One Variable:</strong>
        If h(x) = f(g(x)), then h'(x) = f'(g(x)) · g'(x)

        <strong>Remark:</strong>
        If y = g(x), then the chain rule can be rewritten as:
        $$\\frac{dh}{dx} = \\frac{df}{dy} \\frac{dy}{dx}$$

        <strong>Chain Rule - Simplest Version:</strong>
        If z = f(x, y), x = g(t), and y = h(t), then:
        $$\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial f}{\\partial y} \\frac{dy}{dt}$$

        <strong>Chain Rule - Two Independent Variables:</strong>
        If z = f(x, y), x = g(s, t), and y = h(s, t), then:
        $$\\frac{\\partial z}{\\partial s} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial s} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial s}$$

        and

        $$\\frac{\\partial z}{\\partial t} = \\frac{\\partial f}{\\partial x} \\frac{\\partial x}{\\partial t} + \\frac{\\partial f}{\\partial y} \\frac{\\partial y}{\\partial t}$$

        <strong>General Remark:</strong>
        The rule can be generalized to the case where z = f(x₁, x₂, ..., xₙ) and each xᵢ depends on m variables t₁, ..., t_m.

        <strong>Tree Diagram Method:</strong>
        1. Draw a tree showing the dependency relationships
        2. For each path from the final variable to an independent variable, multiply the partial derivatives along the path
        3. Sum all such products

        <strong>Applications:</strong>
        - Converting between coordinate systems
        - Implicit differentiation in multiple variables
        - Related rates problems in multiple dimensions
        - Optimization with constraints`,
          },
        ],
      },
      {
        id: "week-3",
        title: "Week 3: Double Integrals",
        content: `This week introduces double integrals, extending integration to functions of two variables. We learn to compute areas, volumes, and other quantities over two-dimensional regions.

    <strong>Key Topics Covered:</strong>
    - Definition of double integrals and Riemann sums
    - Integrals over rectangular regions
    - Iterated integrals and Fubini's theorem
    - Type I and Type II integration regions
    - Polar coordinates and integration
    - Applications of double integrals

    <strong>Learning Objectives:</strong>
    By the end of this week, you should be able to:
    - Set up and evaluate double integrals over rectangles
    - Apply Fubini's theorem to convert double integrals to iterated integrals
    - Integrate over general regions using Type I and Type II descriptions
    - Use polar coordinates for appropriate integration problems
    - Apply double integrals to find areas, volumes, and centers of mass`,
        subsections: [
          {
            id: "double-integrals-definition",
            title: "1. Double Integrals",
            content: `<strong>Interpretation:</strong>
        The double integral of f over the region D, denoted by:
        $$\\iint_D f(x, y) \\, dA$$
        is the (signed) volume under the graph of f for (x, y) in D.

        <strong>Riemann Integral:</strong>
        The integral of f over the rectangle R is:
        $$\\iint_R f(x, y) \\, dA = \\lim_{\\Delta A \\downarrow 0} \\sum_{ij} f(x_{ij}^*, y_{ij}^*) \\Delta A$$
        if this limit exists.

        <strong>Existence Theorem:</strong>
        The double integral exists for any continuous function.

        <strong>Computation Rules (Similar to Single Variable):</strong>
        $$\\iint_D [f(x, y) + g(x, y)] \\, dA = \\iint_D f(x, y) \\, dA + \\iint_D g(x, y) \\, dA$$

        $$\\iint_D cf(x, y) \\, dA = c\\iint_D f(x, y) \\, dA$$

        If f(x, y) ≤ g(x, y) on D, then:
        $$\\iint_D f(x, y) \\, dA \\leq \\iint_D g(x, y) \\, dA$$

        <strong>Area Formula:</strong>
        $$\\iint_D 1 \\, dA = \\text{area}(D)$$

        <strong>Additivity:</strong>
        If D consists of non-overlapping parts D₁, D₂, then:
        $$\\iint_D f(x, y) \\, dA = \\iint_{D_1} f(x, y) \\, dA + \\iint_{D_2} f(x, y) \\, dA$$

        <strong>Applications:</strong>
        - Mass and center of mass of two-dimensional objects
        - Moment of inertia for rotating objects
        - Average values over regions
        - Probability calculations for continuous distributions`,
          },
          {
            id: "double-integrals-rectangles",
            title: "2. Double Integrals Over Rectangles",
            content: `<strong>From Double Integral to Iterated Integral:</strong>
        Suppose R is the rectangle [a,b] × [c,d] and f(x,y) is a function.

        $$\\iint_R f(x, y) \\, dA = \\sum_{i=1}^m \\text{Volume}(\\text{slice } i)$$
        $$\\approx \\sum_{i=1}^m \\text{Area}(\\text{slice } i) \\Delta x$$
        $$= \\sum_{i=1}^m \\left(\\int_c^d f(x_i^*, y) \\, dy\\right) \\Delta x$$

        <strong>Fubini's Theorem:</strong>
        If f is continuous on the rectangle R = [a,b] × [c,d] = {(x,y) | a ≤ x ≤ b, c ≤ y ≤ d}, then:

        $$\\iint_R f(x, y) \\, dA = \\int_a^b \\int_c^d f(x, y) \\, dy \\, dx = \\int_c^d \\int_a^b f(x, y) \\, dx \\, dy$$

        <strong>Key Points:</strong>
        - The order of integration can be switched for continuous functions
        - Inner integral treats the other variable as constant
        - Outer integral integrates the result of the inner integral
        - Both orders give the same result

        <strong>Example:</strong>
        $$\\iint_R xy \\, dA \\text{ over } R = [0,2] \\times [1,3]$$

        Method 1: $$\\int_0^2 \\int_1^3 xy \\, dy \\, dx = \\int_0^2 x \\left[\\frac{y^2}{2}\\right]_1^3 dx = \\int_0^2 x \\cdot 4 \\, dx = 8$$

        Method 2: $$\\int_1^3 \\int_0^2 xy \\, dx \\, dy = \\int_1^3 y \\left[\\frac{x^2}{2}\\right]_0^2 dy = \\int_1^3 2y \\, dy = 8$$`,
          },
          {
            id: "double-integrals-general-regions",
            title: "3. Double Integrals Over General Regions",
            content: `<strong>Type I and Type II Regions:</strong>

        <strong>Definition Type I:</strong>
        A region of type I (or y-simple region) is a region of the form:
        $$D = \\{(x, y) | a ≤ x ≤ b, g_1(x) ≤ y ≤ g_2(x)\\}$$

        <strong>Definition Type II:</strong>
        A region of type II (or x-simple region) is a region of the form:
        $$D = \\{(x, y) | c ≤ y ≤ d, h_1(y) ≤ x ≤ h_2(y)\\}$$

        <strong>Integral over Type I Region:</strong>
        If f(x,y) is a function on a type I region D, then:
        $$\\iint_D f(x, y) \\, dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x, y) \\, dy \\, dx$$

        <strong>Integral over Type II Region:</strong>
        If f(x,y) is a function on a type II region D, then:
        $$\\iint_D f(x, y) \\, dA = \\int_c^d \\int_{h_1(y)}^{h_2(y)} f(x, y) \\, dx \\, dy$$

        <strong>Steps to Calculate Double Integrals:</strong>
        1. Sketch the domain D
        2. Determine whether it is a type I or II region
        3. Write D in the relevant form
        4. Write the integral as an iterated integral and calculate it

        <strong>Example:</strong>
        For the region D bounded by y = x², y = 2x:
        - Type I: D = {(x,y) | 0 ≤ x ≤ 2, x² ≤ y ≤ 2x}
        - Type II: D = {(x,y) | 0 ≤ y ≤ 2, y/2 ≤ x ≤ √y}

        <strong>Choosing the Best Approach:</strong>
        - Some regions are easier to describe as Type I, others as Type II
        - Sometimes one approach leads to simpler integrals
        - Complex regions may need to be split into multiple parts`,
          },
          {
            id: "polar-coordinates",
            title: "4. Polar Coordinates",
            content: `<strong>Coordinate Transformation:</strong>
        - x = r cos(θ)
        - y = r sin(θ)
        - dA = r dr dθ

        <strong>Integral Over Polar Rectangle:</strong>
        If the domain equals:
        $$D = \\{(r, \\theta) | a ≤ r ≤ b, \\alpha ≤ \\theta ≤ \\beta, 0 ≤ \\beta - \\alpha ≤ 2\\pi\\}$$
        in polar coordinates, then:
        $$\\iint_D f(x, y) \\, dA = \\int_\\alpha^\\beta \\int_a^b f(r\\cos(\\theta), r\\sin(\\theta)) \\, r \\, dr \\, d\\theta$$

        <strong>Integral Over More General Region:</strong>
        If the domain equals:
        $$D = \\{(r, \\theta) | h_1(\\theta) ≤ r ≤ h_2(\\theta), \\alpha ≤ \\theta ≤ \\beta, 0 ≤ \\beta - \\alpha ≤ 2\\pi\\}$$
        in polar coordinates, then:
        $$\\iint_D f(x, y) \\, dA = \\int_\\alpha^\\beta \\int_{h_1(\\theta)}^{h_2(\\theta)} f(r\\cos(\\theta), r\\sin(\\theta)) \\, r \\, dr \\, d\\theta$$

        <strong>When to Use Polar Coordinates:</strong>
        - Circular or annular regions
        - Functions involving x² + y²
        - Integrands with √(x² + y²)
        - Regions bounded by circles or rays from origin

        <strong>Key Points:</strong>
        - Don't forget the factor r in the area element
        - θ typically ranges from 0 to 2π or -π to π
        - r is always non-negative
        - Convert the integrand to polar form before integrating

        <strong>Example:</strong>
        Find the area of the circle x² + y² = 4:
        $$\\text{Area} = \\iint_D 1 \\, dA = \\int_0^{2\\pi} \\int_0^2 r \\, dr \\, d\\theta = \\int_0^{2\\pi} 2 \\, d\\theta = 4\\pi$$`,
          },
        ],
      },
      {
        id: "week-4",
        title: "Week 4: Triple Integrals",
        content: `This week extends integration to three dimensions with triple integrals. We learn to compute volumes, masses, and other quantities over three-dimensional regions using various coordinate systems.

    <strong>Key Topics Covered:</strong>
    - Definition and applications of triple integrals
    - Type 1, 2, and 3 integration regions
    - Cylindrical coordinates and volume elements
    - Spherical coordinates and volume elements
    - Applications to volume, mass, and center of mass

    <strong>Learning Objectives:</strong>
    By the end of this week, you should be able to:
    - Set up and evaluate triple integrals over various regions
    - Choose appropriate coordinate systems for integration
    - Use cylindrical coordinates for problems with cylindrical symmetry
    - Use spherical coordinates for problems with spherical symmetry
    - Apply triple integrals to physical problems`,
        subsections: [
          {
            id: "triple-integrals-definition",
            title: "1. Triple Integrals",
            content: `<strong>Triple Integral:</strong>
        The triple integration of f over the (solid) region E is denoted by:
        $$\\iiint_E f(x, y, z) \\, dV$$

        <strong>Interpretation:</strong>
        - When f(x, y, z) = 1, the triple integral gives the volume of region E
        - When f(x, y, z) = ρ(x, y, z) (density), it gives the total mass
        - Generally represents the "accumulation" of f over the 3D region E

        <strong>Applications:</strong>
        - Volume of 3D regions
        - Mass of objects with variable density
        - Center of mass and moments of inertia
        - Average values over 3D regions
        - Electric charge distribution
        - Gravitational and electromagnetic field calculations

        <strong>Computation:</strong>
        Like double integrals, triple integrals are typically computed as iterated integrals, but now with three nested integrations.

        <strong>Coordinate Systems:</strong>
        - Rectangular (Cartesian): dV = dx dy dz
        - Cylindrical: dV = r dr dθ dz
        - Spherical: dV = ρ² sin φ dρ dθ dφ`,
          },
          {
            id: "triple-integrals-general-regions",
            title: "2. Triple Integrals Over General Regions",
            content: `<strong>Regions of Type I (z-simple):</strong>
        A solid region E is said to be of type 1 or z-simple if it lies between the graphs of two continuous functions of x and y:
        $$E = \\{(x, y, z) | (x, y) ∈ D, u_1(x, y) ≤ z ≤ u_2(x, y)\\}$$
        where D is the projection of E onto the xy-plane.

        <strong>Triple Integrals Over a Region of Type I:</strong>
        If the solid region E is of type 1, then:
        $$\\iiint_E f(x, y, z) \\, dV = \\iint_D \\left(\\int_{u_1(x,y)}^{u_2(x,y)} f(x, y, z) \\, dz\\right) dA$$

        <strong>Regions of Type II (x-simple):</strong>
        A solid region E is said to be of type 2 or x-simple if it lies between the graphs of two continuous functions of y and z:
        $$E = \\{(x, y, z) | (y, z) ∈ D, u_1(y, z) ≤ x ≤ u_2(y, z)\\}$$
        where D is the projection of E onto the yz-plane.

        <strong>Triple Integrals Over a Region of Type II:</strong>
        If the solid region E is of type 2, then:
        $$\\iiint_E f(x, y, z) \\, dV = \\iint_D \\left(\\int_{u_1(y,z)}^{u_2(y,z)} f(x, y, z) \\, dx\\right) dA$$

        <strong>Regions of Type III (y-simple):</strong>
        A solid region E is said to be of type 3 or y-simple if it lies between the graphs of two continuous functions of x and z:
        $$E = \\{(x, y, z) | (x, z) ∈ D, u_1(x, z) ≤ y ≤ u_2(x, z)\\}$$
        where D is the projection of E onto the xz-plane.

        <strong>Triple Integrals Over a Region of Type III:</strong>
        If the solid region E is of type 3, then:
        $$\\iiint_E f(x, y, z) \\, dV = \\iint_D \\left(\\int_{u_1(x,z)}^{u_2(x,z)} f(x, y, z) \\, dy\\right) dA$$

        <strong>Strategy for Choosing Type:</strong>
        - Choose the type that makes the region description simplest
        - Consider which coordinate gives the most natural bounds
        - Sometimes multiple approaches work equally well`,
          },
          {
            id: "cylindrical-coordinates",
            title: "3. Triple Integrals With Cylindrical Coordinates",
            content: `<strong>Cylindrical Coordinate System:</strong>
        - x = r cos θ
        - y = r sin θ  
        - z = z
        - Volume element: dV = r dz dr dθ

        <strong>Triple Integrals In Cylindrical Coordinates:</strong>
        If E = {(x, y, z) | (x, y) ∈ D, u₁(x, y) ≤ z ≤ u₂(x, y)} and D is given in polar coordinates by α ≤ θ ≤ β, h₁(θ) ≤ r ≤ h₂(θ), then:

        $$\\iiint_E f(x, y, z) \\, dV = \\int_\\alpha^\\beta \\int_{h_1(\\theta)}^{h_2(\\theta)} \\int_{u_1(r\\cos\\theta, r\\sin\\theta)}^{u_2(r\\cos\\theta, r\\sin\\theta)} f(r\\cos\\theta, r\\sin\\theta, z) \\, r \\, dz \\, dr \\, d\\theta$$

        <strong>When to Use Cylindrical Coordinates:</strong>
        - Regions with cylindrical symmetry (cylinders, cones)
        - Functions involving x² + y²
        - Axis of symmetry along the z-axis
        - Circular cross-sections in xy-plane

        <strong>Volume Element Derivation:</strong>
        The volume element comes from the Jacobian of the transformation:
        $$J = \\begin{vmatrix} \\frac{\\partial x}{\\partial r} & \\frac{\\partial x}{\\partial \\theta} & \\frac{\\partial x}{\\partial z} \\\\ \\frac{\\partial y}{\\partial r} & \\frac{\\partial y}{\\partial \\theta} & \\frac{\\partial y}{\\partial z} \\\\ \\frac{\\partial z}{\\partial r} & \\frac{\\partial z}{\\partial \\theta} & \\frac{\\partial z}{\\partial z} \\end{vmatrix} = r$$

        <strong>Common Applications:</strong>
        - Volume of cylinders, cones, and paraboloids
        - Mass of objects with rotational symmetry
        - Moments of inertia about axes
        - Flow through cylindrical pipes`,
          },
          {
            id: "spherical-coordinates",
            title: "4. Triple Integrals With Spherical Coordinates",
            content: `<strong>Spherical Coordinate System:</strong>
        - x = ρ sin φ cos θ
        - y = ρ sin φ sin θ
        - z = ρ cos φ
        - Volume element: dV = ρ² sin φ dρ dθ dφ

        Where:
        - ρ ≥ 0 is the distance from origin
        - 0 ≤ φ ≤ π is the angle from positive z-axis
        - 0 ≤ θ ≤ 2π is the azimuthal angle in xy-plane

        <strong>Triple Integral In Spherical Coordinates:</strong>
        If E is given in spherical coordinates by c ≤ φ ≤ d, α ≤ θ ≤ β, g₁(θ, φ) ≤ ρ ≤ g₂(θ, φ), then:

        $$\\iiint_E f(x, y, z) \\, dV = \\int_c^d \\int_\\alpha^\\beta \\int_{g_1(\\theta, \\phi)}^{g_2(\\theta, \\phi)} f(\\rho\\sin\\phi\\cos\\theta, \\rho\\sin\\phi\\sin\\theta, \\rho\\cos\\phi) \\, \\rho^2 \\sin\\phi \\, d\\rho \\, d\\theta \\, d\\phi$$

        <strong>When to Use Spherical Coordinates:</strong>
        - Regions with spherical symmetry (spheres, cones from origin)
        - Functions involving x² + y² + z²
        - Problems centered at the origin
        - Spherical shells and sectors

        <strong>Volume Element Derivation:</strong>
        The volume element ρ² sin φ comes from the Jacobian determinant of the spherical coordinate transformation.

        <strong>Key Points:</strong>
        - Don't forget the ρ² sin φ factor
        - φ = 0 corresponds to positive z-axis
        - φ = π/2 corresponds to xy-plane
        - φ = π corresponds to negative z-axis

        <strong>Common Applications:</strong>
        - Volume of spheres, spherical caps, and cones
        - Gravitational and electric field problems
        - Problems in astronomy and physics
        - Heat conduction in spherical objects

        <strong>Example:</strong>
        Volume of sphere x² + y² + z² ≤ a²:
        $$V = \\iiint_E 1 \\, dV = \\int_0^{2\\pi} \\int_0^\\pi \\int_0^a \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta = \\frac{4\\pi a^3}{3}$$`,
          },
        ],
      },
      {
        id: "week-5",
        title: "Week 5: Extreme Values",
        content: `This week focuses on finding maximum and minimum values of multivariable functions. We learn to identify critical points, classify them, and find extreme values on bounded domains.

    <strong>Key Topics Covered:</strong>
    - Definition of local and global extrema
    - Critical points and their classification
    - Second derivatives test for multivariable functions
    - Hessian matrix and eigenvalue analysis
    - Finding extreme values on closed and bounded domains
    - Applications to optimization problems

    <strong>Learning Objectives:</strong>
    By the end of this week, you should be able to:
    - Find and classify critical points of multivariable functions
    - Apply the second derivatives test
    - Use the Hessian matrix for classification
    - Find extreme values on closed and bounded regions
    - Solve optimization problems in multiple variables`,
        subsections: [
          {
            id: "extreme-values-definition",
            title: "1. Extreme Values",
            content: `<strong>Absolute Extreme Values:</strong>
        Let p = (p₁, ..., pₙ) be a point in the domain D of a function f(x). Then f(p) is the:
        - <strong>Absolute Maximum</strong> value of f on D if f(p) ≥ f(x) for all x in D
        - <strong>Absolute Minimum</strong> value of f on D if f(p) ≤ f(x) for all x in D

        <strong>Local Extreme Values:</strong>
        Let p = (p₁, ..., pₙ) be a point in the domain D of a function f(x). Then f(p) is a:
        - <strong>Local Maximum</strong> value of f if there exists R > 0 such that f(p) ≥ f(x) for all x such that ||x - p|| < R
        - <strong>Local Minimum</strong> value of f if there exists R > 0 such that f(p) ≤ f(x) for all x such that ||x - p|| < R

        <strong>Extreme Value Theorem:</strong>
        Suppose f(x) is a continuous function on a closed and bounded domain D ⊂ ℝⁿ. Then f attains both an absolute maximum and an absolute minimum on that domain.

        <strong>Bounded Domains:</strong>
        A region D ⊂ ℝⁿ is called bounded if there exists a number M > 0 such that ||x|| < M for all x ∈ D.

        <strong>Closed Domain:</strong>
        A region D ⊂ ℝⁿ is called closed if it contains all of its boundary points.

        <strong>Examples:</strong>
        - Closed and bounded: disk {(x,y) | x² + y² ≤ 1}
        - Open and bounded: disk {(x,y) | x² + y² < 1}
        - Closed and unbounded: half-plane {(x,y) | x ≥ 0}
        - Neither closed nor bounded: {(x,y) | x² + y² > 1}`,
          },
          {
            id: "critical-points",
            title: "2. Critical Points",
            content: `<strong>Critical Point:</strong>
        A point p in the domain of a function f is called a critical point of f if:
        - D_u f(p) = 0 for all unit vectors u, or
        - A directional derivative does not exist at that point

        <strong>Alternative Definition:</strong>
        A point p in the domain of a function f of n variables is called a critical point of f if:
        - f_{x_i}(p) = 0 for i = 1, ..., n, or
        - One of the partial derivatives fails to exist at p

        <strong>Fermat's Theorem:</strong>
        Suppose f(x) has a local minimum or local maximum at the point p. Then p is a critical point of f.

        <strong>Note:</strong>
        A critical point at which the function does not take an extreme value is called a saddle point.

        <strong>Second Derivatives Test: Two Variables:</strong>
        Let f(x,y) be a differentiable function and let (a,b) be a critical point. Denote:
        $$D(a,b) = f_{xx}(a,b)f_{yy}(a,b) - f_{xy}(a,b)f_{yx}(a,b)$$

        Then:
        - If D(a,b) > 0 and f_{xx}(a,b) < 0, there is a local maximum at (a,b)
        - If D(a,b) > 0 and f_{xx}(a,b) > 0, there is a local minimum at (a,b)  
        - If D(a,b) < 0, there is a saddle point at (a,b)
        - If D(a,b) = 0, the test is inconclusive

        <strong>Hessian Matrix:</strong>
        Let f be a function of n variables. The Hessian matrix of f at point p is:
        $$H = \\begin{bmatrix} f_{x_1x_1}(p) & f_{x_2x_1}(p) & \\cdots & f_{x_nx_1}(p) \\\\ f_{x_1x_2}(p) & f_{x_2x_2}(p) & \\cdots & f_{x_nx_2}(p) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ f_{x_1x_n}(p) & f_{x_2x_n}(p) & \\cdots & f_{x_nx_n}(p) \\end{bmatrix}$$

        <strong>General Second Derivatives Test:</strong>
        Let f(x) be a differentiable function of n variables and let p be a critical point. Let λ₁, λ₂, ..., λₙ denote the eigenvalues of the Hessian matrix at p.

        Then:
        - If λᵢ < 0 for all i = 1, ..., n, then f has a local maximum at p
        - If λᵢ > 0 for all i = 1, ..., n, then f has a local minimum at p
        - If λᵢ = 0 for any i = 1, ..., n, then the test is inconclusive
        - Otherwise, f has a saddle point at p`,
          },
          {
            id: "finding-extreme-values",
            title: "3. Finding Extreme Values",
            content: `<strong>Critical Points (Review):</strong>
        A point p in the domain of a function f of n variables is called a critical point of f if:
        - f_{x_i}(p) = 0 for i = 1, ..., n, or
        - One of the partial derivatives fails to exist at p

        <strong>Fermat's Theorem (Review):</strong>
        Suppose f(x) has a local minimum or local maximum at point p. Then p is a critical point of f.

        <strong>Extreme Value Theorem (Review):</strong>
        Suppose f(x) is a continuous function on a closed and bounded domain D ⊂ ℝⁿ. Then f attains both an absolute maximum and an absolute minimum on that domain.

        <strong>Corollary:</strong>
        In the setting of the previous theorem, the function must attain its maximum and minimum either on the boundary of the domain or at a critical point in the interior of the domain.

        <strong>Closed and Bounded Region Method:</strong>
        To find the absolute maximum and minimum values of a continuous function f on a closed and bounded domain D, apply the following algorithm:

        1. Find the values of f at the critical points of f in the interior of region D
        2. Find the extreme values of f restricted to the boundary of region D by applying this algorithm to the function obtained by restricting f to the boundary of D
        3. The largest of the values from Steps 1 and 2 is the absolute maximum value; the smallest of these values is the absolute minimum value

        <strong>Finding Critical Points in Contour Plots:</strong>

        <strong>Local Minima/Maxima:</strong>
        - Contour lines form simple closed curves (circles or ellipses) around the critical point
        - Level curves get closer together as you move away from the critical point
        - Need to check level values to distinguish between maximum and minimum

        <strong>Saddle Points:</strong>
        - Critical point lies at the intersection of two level curves
        - Level curves intersect because function increases in one direction and decreases in another
        - Boundaries between increasing and decreasing regions form intersecting lines

        <strong>Strategy:</strong>
        - Use sufficient resolution in contour plots
        - Include level information or color coding
        - Look for characteristic patterns around critical points
        - Verify findings with analytical methods`,
          },
        ],
      },
      {
        id: "week-6",
        title: "Week 6: Directional Derivatives and Gradients",
        content: `This week explores directional derivatives and gradients, which tell us how functions change in any direction. We learn about the gradient vector and its geometric and physical interpretations.

    <strong>Key Topics Covered:</strong>
    - Definition of directional derivatives
    - Definition and properties of the gradient vector
    - Direction of steepest ascent and descent
    - Relationship between gradients and contour plots
    - Tangent planes to level surfaces
    - Applications in optimization and physics

    <strong>Learning Objectives:</strong>
    By the end of this week, you should be able to:
    - Calculate directional derivatives in any direction
    - Find and interpret gradient vectors
    - Identify directions of steepest ascent and descent
    - Relate gradients to level curves and surfaces
    - Find tangent planes to level surfaces
    - Apply these concepts to optimization problems`,
        subsections: [
          {
            id: "directional-derivatives",
            title: "1. Directional Derivatives",
            content: `<strong>Interpretation:</strong>
        Directional derivatives measure the rate of change of a function in any specified direction, not just along coordinate axes.

        <strong>Partial Derivatives (Review):</strong>
        Given a function f(x,y), the partial derivatives at point (a,b) are:
        $$f_x(a,b) = \\lim_{h \\to 0} \\frac{f(a+h,b) - f(a,b)}{h}$$
        $$f_y(a,b) = \\lim_{h \\to 0} \\frac{f(a,b+h) - f(a,b)}{h}$$

        <strong>Directional Derivative:</strong>
        Given a function f(x,y) and a unit vector u = ⟨u₁, u₂⟩, the directional derivative at point (a,b) in direction u is:
        $$D_u f(a,b) = \\lim_{h \\to 0} \\frac{f(a + u_1 h, b + u_2 h) - f(a,b)}{h}$$

        <strong>General Definition:</strong>
        For a function f(x₁, ..., xₙ) and unit vector u = ⟨u₁, ..., uₙ⟩, the directional derivative at point (a₁, ..., aₙ) is:
        $$D_u f(a_1, ..., a_n) = \\lim_{h \\to 0} \\frac{f(a_1 + u_1 h, ..., a_n + u_n h) - f(a_1, ..., a_n)}{h}$$

        <strong>Unit Vector:</strong>
        A unit vector is a vector u of length ||u|| = 1. Given a non-zero vector v, the normalized vector û = v/||v|| is a unit vector with the same direction as v.

        <strong>Relation with Partial Derivatives:</strong>
        For a differentiable function f(x,y) and unit vector u = ⟨u₁, u₂⟩:
        $$D_u f(a,b) = f_x(a,b)u_1 + f_y(a,b)u_2$$

        <strong>General Theorem:</strong>
        For a differentiable function f(x₁, ..., xₙ) and unit vector u = ⟨u₁, ..., uₙ⟩:
        $$D_u f(a_1, ..., a_n) = f_{x_1}(a_1, ..., a_n)u_1 + \\cdots + f_{x_n}(a_1, ..., a_n)u_n$$

        <strong>Gradient Vector:</strong>
        Given a function f(x₁, ..., xₙ), the gradient vector ∇f at point (a₁, ..., aₙ) is:
        $$\
abla f(a_1, ..., a_n) = ⟨f_{x_1}(a_1, ..., a_n), ..., f_{x_n}(a_1, ..., a_n)⟩$$

        <strong>Directional Derivative vs Gradient:</strong>
        For a differentiable function f(x₁, ..., xₙ), unit vector u, and point p:
        $$D_u f(p) = \
abla f(p) \\cdot u$$`,
          },
          {
            id: "gradient-function",
            title: "2. The Gradient of a Function",
            content: `<strong>Directional Derivative Formula:</strong>
        For a differentiable function f(x,y), unit vector u = ⟨u₁, u₂⟩, and point (a,b):
        $$D_u f(a,b) = ||\
abla f(a,b)|| \\cos(\\theta)$$
        where θ is the angle between vector u and the gradient vector.

        <strong>Proof:</strong>
        The dot product of two vectors v and w is:
        $$v \\cdot w = ||v|| ||w|| \\cos(\\theta)$$
        where θ is the angle between v and w.

        <strong>Steepest Ascent:</strong>
        Let f(x,y) be a differentiable function. Then the gradient vector v = ∇f(x,y) indicates the direction of steepest ascent, and if v̂ denotes the corresponding normalized vector:
        $$D_{\\hat{v}} f(x,y) = ||\
abla f(x,y)||$$

        <strong>Steepest Descent:</strong>
        The vector v = -∇f(x,y) indicates the direction of steepest descent, and:
        $$D_{\\hat{v}} f(x,y) = -||\
abla f(x,y)||$$

        <strong>Key Insights:</strong>
        - Maximum directional derivative occurs when u points in direction of ∇f
        - Minimum directional derivative occurs when u points opposite to ∇f
        - Zero directional derivative occurs when u is perpendicular to ∇f

        <strong>Gradient vs Level Curve:</strong>
        For a differentiable function f(x,y), the gradient vector ∇f(a,b) is perpendicular to the tangent line to the level curve f(x,y) = f(a,b) at point (a,b).

        <strong>Tangent Line to Level Curve:</strong>
        If f(x,y) is differentiable and k is a constant, the tangent line to the curve f(x,y) = k at point (a,b) is:
        $$f_x(a,b)x + f_y(a,b)y = c$$
        where c = f_x(a,b)a + f_y(a,b)b.

        <strong>Tangent Plane to Level Surface:</strong>
        If f(x,y,z) is differentiable and k is a constant, the tangent plane to the surface f(x,y,z) = k at point (a,b,c) is:
        $$f_x(a,b,c)x + f_y(a,b,c)y + f_z(a,b,c)z = C$$
        where C = f_x(a,b,c)a + f_y(a,b,c)b + f_z(a,b,c)c.

        <strong>Physical Interpretation:</strong>
        - In heat conduction: gradient points toward increasing temperature
        - In fluid flow: gradient of pressure drives flow
        - In economics: gradient shows direction of maximum profit increase
        - In machine learning: negative gradient used in optimization algorithms

        <strong>Applications:</strong>
        - Optimization algorithms (gradient descent)
        - Finding normal vectors to surfaces
        - Analyzing flow patterns in physics
        - Image processing (edge detection)
        - Economic modeling (utility maximization)`,
          },
        ],
      },
    ],
    category: "math",
    categoryName: "Mathematics",
    date: "March 1, 2024",
    tags: ["Calculus", "Multivariable", "Partial Derivatives", "Multiple Integrals", "Optimization", "Gradients"],
  },
  {
    id: "3",
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
            content: `<strong>Definition:<strong> Kinematics: How things move, speeding up, speeding down, length in time from one point to another, or how fast they are traveling.
            
            Examples of kinematics include anything that is a how. How fast is the car going? How long did it take to get there? How far did it?
            
            <strong>Definition:<strong> <strong>Dynamics:</strong> Why things move (forces).

            Dynamics on the other hand is the why. Why did the car speed up? Why did it slow down? Why did it stop?

            <strong>Equation:<strong> $$speed = \\frac{distance}{time}$$ <br> In the speed equation, distance is in meters and time is in seconds, resulting in meters per second ($\\frac{m}{s}$).
            
            When solving problems relating speed, there are certain steps to follow to ensure the problem is solved correctly.

            <strong>Procedures:<strong> 1. Identify and list the givens and the unknown.<br>2. Draw and label a diagram of the situation.<br>3. Select a formula containing the givens and the unknown.<br>4. Cross out terms that are equal to zero.<br>5. Solve the formula so that the unknown is alone on the left.<br>6. Substitute in the givens, with their units.<br>7. Calculate the value of the unknown, including its units.&nbsp;
            `,
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

        **<strong>Quantum Entanglement</strong>** is a phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently, regardless of the distance separating them.
        
        **Einstein-Podolsky-Rosen (EPR) Paradox** is testing.

        <strong>Definition:<strong> testing.

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

export const getNotes = () => {
  return mockNotes
}

export const getNoteById = (id: string): Note | undefined => {
  return mockNotes.find((note) => note.id === id)
}
