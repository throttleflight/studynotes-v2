// This is a mock notes service
// In a real app, you would fetch this data from an API or database

export interface NoteSection {
  id: string
  title: string
  content: string
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
      },
      {
        id: "limits",
        title: "Understanding Limits",
        content: `A fundamental concept in calculus is the **limit**. 

  **Definition:** The **limit** of a function $f(x)$ as $x$ approaches a value $c$ is the value that $f(x)$ gets arbitrarily close to as $x$ gets arbitrarily close to $c$. This is written as:

  $$\\lim_{x \\to c} f(x) = L$$

  where $L$ is the limit.

  A **continuous function** is defined as a function where the limit at every point equals the function value at that point.

  Limits are essential because they allow us to define derivatives and integrals rigorously. Without limits, we couldn't handle situations where functions are undefined at certain points or where we need to find instantaneous rates of change.

  **Key properties of limits include:**

  - The limit of a sum: $\\lim_{x \\to c} [f(x) + g(x)] = \\lim_{x \\to c} f(x) + \\lim_{x \\to c} g(x)$
  - The limit of a product: $\\lim_{x \\to c} [f(x) \\cdot g(x)] = \\lim_{x \\to c} f(x) \\cdot \\lim_{x \\to c} g(x)$
  - The limit of a quotient: $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to c} f(x)}{\\lim_{x \\to c} g(x)}$ (provided the denominator limit is not zero)

  **Example:** Consider the limit $\\lim_{x \\to 2} (3x + 1)$. As $x$ approaches 2, the expression $3x + 1$ approaches $3(2) + 1 = 7$.

  Understanding limits is crucial for mastering calculus concepts.`,
      },
      {
        id: "derivatives",
        title: "Derivatives and Differentiation",
        content: `The **derivative** of a function $f(x)$ with respect to $x$ is defined as the limit of the difference quotient as $h$ approaches 0:

        $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

        It represents the **instantaneous rate of change** of the function at a particular point.

        Geometrically, the derivative at a point gives us the slope of the tangent line to the curve at that point. This concept is fundamental in understanding how quantities change.

        **Common derivative rules include:**

        - **Power Rule:** $\\frac{d}{dx}(x^n) = nx^{n-1}$
        - **Product Rule:** $\\frac{d}{dx}(uv) = u'v + uv'$
        - **Chain Rule:** $\\frac{d}{dx}(f(g(x))) = f'(g(x)) \\cdot g'(x)$
        - **Quotient Rule:** $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}$

        **Example:** Find the derivative of $f(x) = x^3 + 2x^2 - 5x + 1$

        Using the power rule:
        $$f'(x) = 3x^2 + 4x - 5$$

        **Applications of derivatives include:**
        - Finding maximum and minimum values
        - Analyzing motion (velocity and acceleration)
        - Optimization problems
        - Related rates problems`,
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

        This means differentiation and integration are inverse operations.

        **Common integration formulas:**

        - $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$)
        - $\\int e^x\\,dx = e^x + C$
        - $\\int \\sin(x)\\,dx = -\\cos(x) + C$
        - $\\int \\cos(x)\\,dx = \\sin(x) + C$

        **Integration techniques include:**
        - **Substitution method:** Used when the integrand contains a function and its derivative
        - **Integration by parts:** $\\int u\\,dv = uv - \\int v\\,du$
        - **Partial fractions:** For rational functions
        - **Trigonometric substitution:** For expressions involving $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, etc.

        **Example:** Evaluate $\\int_0^2 (3x^2 + 2x)\\,dx$

        First, find the antiderivative: $\\int (3x^2 + 2x)\\,dx = x^3 + x^2 + C$

        Then apply the limits: $[x^3 + x^2]_0^2 = (8 + 4) - (0 + 0) = 12$

        **Applications include:**
        - Finding areas under curves
        - Calculating volumes of solids of revolution
        - Solving differential equations
        - Computing work and energy in physics`,
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

        This century was marked by unprecedented global conflicts, revolutionary technological advances, and dramatic social transformations that shaped the modern world we live in today.

        Key themes of the 20th century include:
        - Global warfare and its consequences
        - Technological revolution
        - Ideological conflicts
        - Decolonization and independence movements
        - Social and cultural changes`,
      },
      {
        id: "world-war-1",
        title: "World War I (1914-1918)",
        content: `World War I was triggered by the assassination of Archduke Franz Ferdinand of Austria on June 28, 1914. It involved the major powers of Europe, divided into the Allied Powers (Britain, France, Russia, and later the United States) and the Central Powers (Germany, Austria-Hungary, Ottoman Empire, and Bulgaria).

        The war was characterized by:
        - Trench warfare on the Western Front
        - New military technologies (machine guns, poison gas, tanks)
        - Massive casualties (over 16 million deaths)
        - Economic devastation across Europe

        The war resulted in the collapse of four empires (German, Austro-Hungarian, Russian, and Ottoman) and set the stage for World War II. The Treaty of Versailles imposed harsh terms on Germany, creating resentment that would later be exploited by extremist movements.

        The war fundamentally changed the global balance of power and marked the end of the old European order.`,
      },
      {
        id: "interwar-period",
        title: "The Interwar Period (1918-1939)",
        content: `The period between the two world wars was marked by economic instability, political upheaval, and the rise of totalitarian regimes.

        The Great Depression (1929-1939) was a severe worldwide economic depression that began in the United States after a major fall in stock prices. It was the longest, deepest, and most widespread depression of the 20th century, affecting countries around the world.

        Key developments during this period:
        - Rise of fascism in Italy and Germany
        - Stalin's consolidation of power in the Soviet Union
        - Economic hardship and unemployment
        - Failure of the League of Nations to maintain peace
        - Growing tensions that would lead to World War II

        The interwar period demonstrated the fragility of democratic institutions and the appeal of extremist ideologies during times of crisis.`,
      },
      {
        id: "world-war-2",
        title: "World War II (1939-1945)",
        content: `World War II was a global war that involved the vast majority of the world's nations. It was the deadliest conflict in human history, marked by mass deaths of civilians, including the Holocaust and the only use of nuclear weapons in warfare.

        The war was fought between the Axis powers (Germany, Italy, Japan) and the Allied powers (Britain, Soviet Union, United States, and others).

        Major events and turning points:
        - German invasion of Poland (1939)
        - Battle of Britain (1940)
        - German invasion of Soviet Union (1941)
        - Pearl Harbor attack (1941)
        - D-Day landings (1944)
        - Atomic bombings of Hiroshima and Nagasaki (1945)

        The war resulted in an estimated 70-85 million deaths and led to significant geopolitical changes, including the emergence of the United States and Soviet Union as superpowers and the beginning of the Cold War.`,
      },
      {
        id: "cold-war",
        title: "The Cold War Era",
        content: `The Cold War was a period of geopolitical tension between the Soviet Union and the United States and their respective allies, the Eastern Bloc and the Western Bloc, after World War II. It was characterized by proxy wars, an arms race, and ideological competition.

        Key features of the Cold War:
        - Nuclear arms race and doctrine of mutually assured destruction
        - Division of Germany and the Berlin Wall
        - Proxy wars in Korea, Vietnam, and other regions
        - Space race between the US and USSR
        - Iron Curtain dividing Europe

        The Cold War influenced global politics for nearly half a century, shaping international relations, military strategies, and domestic policies in countries around the world.

        The latter part of the century saw the fall of the Berlin Wall (1989), the collapse of the Soviet Union (1991), and the rise of the internet and digital technology, which transformed how people live, work, and communicate.`,
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
        content: `Hydrocarbons are organic compounds consisting entirely of hydrogen and carbon. They form the simplest class of organic compounds and serve as the foundation for understanding more complex molecules.

        Hydrocarbons can be classified into several categories:

        **Alkanes (Saturated hydrocarbons):**
        - Contain only single bonds
        - General formula: $C_nH_{2n+2}$
        - Examples: methane ($CH_4$), ethane ($C_2H_6$), propane ($C_3H_8$)

        **Alkenes (Unsaturated hydrocarbons):**
        - Contain at least one double bond
        - General formula: $C_nH_{2n}$
        - Examples: ethene ($C_2H_4$), propene ($C_3H_6$)

        **Alkynes:**
        - Contain at least one triple bond
        - General formula: $C_nH_{2n-2}$
        - Examples: ethyne ($C_2H_2$), propyne ($C_3H_4$)

        **Aromatic hydrocarbons:**
        - Contain a benzene ring or similar aromatic system
        - Examples: benzene ($C_6H_6$), toluene ($C_7H_8$)`,
      },
      {
        id: "functional-groups",
        title: "Functional Groups",
        content: `Functional groups are specific groups of atoms within molecules that are responsible for the characteristic chemical reactions of those molecules. They determine the chemical properties and behavior of organic compounds.

        Common functional groups include:

        **Alcohols (-OH):**
        - Hydroxyl group attached to carbon
        - Examples: methanol ($CH_3OH$), ethanol ($C_2H_5OH$)
        - Properties: polar, can form hydrogen bonds

        **Aldehydes (-CHO):**
        - Carbonyl group at the end of a carbon chain
        - Examples: formaldehyde ($HCHO$), acetaldehyde ($CH_3CHO$)
        - Properties: reactive, can be oxidized to carboxylic acids

        **Ketones (C=O):**
        - Carbonyl group within a carbon chain
        - Examples: acetone ($CH_3COCH_3$), butanone ($CH_3COC_2H_5$)
        - Properties: less reactive than aldehydes

        **Carboxylic acids (-COOH):**
        - Carboxyl group combining carbonyl and hydroxyl
        - Examples: acetic acid ($CH_3COOH$), formic acid ($HCOOH$)
        - Properties: acidic, can donate protons

        **Amines (-NH₂, -NHR, -NR₂):**
        - Nitrogen-containing groups
        - Examples: methylamine ($CH_3NH_2$), aniline ($C_6H_5NH_2$)
        - Properties: basic, can accept protons`,
      },
      {
        id: "isomers-reactions",
        title: "Isomers and Organic Reactions",
        content: `**Isomers** are compounds with the same molecular formula but different structural formulas. Understanding isomerism is crucial in organic chemistry as it explains why compounds with identical molecular formulas can have vastly different properties.

        Types of isomers:
        - **Structural isomers:** Different connectivity of atoms
        - **Stereoisomers:** Same connectivity but different spatial arrangement
        - **Conformational isomers:** Can be interconverted by rotation around single bonds

        **Organic Reactions** are chemical reactions involving organic compounds. They can be classified based on the type of reaction or the type of reagent involved.

        Major reaction types:
        - **Addition reactions:** Two molecules combine to form one
        - **Elimination reactions:** One molecule splits into two
        - **Substitution reactions:** One atom or group replaces another
        - **Rearrangement reactions:** Atoms within a molecule are reorganized

        Reagent types:
        - **Nucleophiles:** Electron-rich species that attack electron-poor centers
        - **Electrophiles:** Electron-poor species that attack electron-rich centers
        - **Radicals:** Species with unpaired electrons

        Understanding these concepts is essential for predicting and explaining the behavior of organic molecules in chemical reactions.`,
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
      },
      {
        id: "arrays-lists",
        title: "Arrays and Linked Lists",
        content: `**Arrays** are a collection of elements identified by index or key. They are stored in contiguous memory locations, which makes accessing elements by their index very efficient.

        Array characteristics:
        - **Access time:** $O(1)$ - constant time access by index
        - **Insertion/Deletion:** $O(n)$ - may require shifting elements
        - **Memory:** Contiguous allocation
        - **Cache performance:** Excellent due to locality

        **Linked Lists** consist of nodes where each node contains a data field and a reference (link) to the next node in the sequence.

        Linked List characteristics:
        - **Access time:** $O(n)$ - must traverse from head
        - **Insertion/Deletion:** $O(1)$ - at known position
        - **Memory:** Non-contiguous allocation
        - **Cache performance:** Poor due to scattered memory

        **When to use:**
        - Arrays: When you need fast random access and the size is relatively fixed
        - Linked Lists: When you frequently insert/delete elements and don't need random access

        Both are fundamental building blocks for more complex data structures.`,
      },
      {
        id: "stacks-queues",
        title: "Stacks and Queues",
        content: `**Stacks** are a collection of elements with two principal operations: push (add element) and pop (remove element). They follow the Last In, First Out (LIFO) principle.

        Stack operations:
        - **Push:** Add element to top - $O(1)$
        - **Pop:** Remove element from top - $O(1)$
        - **Peek/Top:** View top element without removing - $O(1)$
        - **isEmpty:** Check if stack is empty - $O(1)$

        Stack applications:
        - Function call management (call stack)
        - Expression evaluation and syntax parsing
        - Undo operations in applications
        - Browser history navigation

        **Queues** follow the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front.

        Queue operations:
        - **Enqueue:** Add element to rear - $O(1)$
        - **Dequeue:** Remove element from front - $O(1)$
        - **Front:** View front element - $O(1)$
        - **isEmpty:** Check if queue is empty - $O(1)$

        Queue applications:
        - Process scheduling in operating systems
        - Breadth-first search algorithms
        - Handling requests in web servers
        - Print job management

        Both stacks and queues are essential for many algorithms and system designs.`,
      },
      {
        id: "trees-hashing",
        title: "Trees and Hash Tables",
        content: `**Trees** are hierarchical data structures with a root value and subtrees of children, represented as a set of linked nodes.

        **Binary Trees:** Each node has at most two children (left and right).
        - **Binary Search Trees (BST):** Left child < parent < right child
        - **Search/Insert/Delete:** $O(\\log n)$ average, $O(n)$ worst case
        - **Applications:** Database indexing, expression parsing

        **Balanced Trees:** Maintain balance to ensure $O(\\log n)$ operations
        - **AVL Trees:** Height-balanced binary search trees
        - **Red-Black Trees:** Used in many standard libraries
        - **B-Trees:** Used in databases and file systems

        Tree traversal methods:
        - **Inorder:** Left → Root → Right
        - **Preorder:** Root → Left → Right
        - **Postorder:** Left → Right → Root
        - **Level-order:** Breadth-first traversal

        **Hash Tables** use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

        Hash Table characteristics:
        - **Average case:** $O(1)$ for search, insert, delete
        - **Worst case:** $O(n)$ when many collisions occur
        - **Space complexity:** $O(n)$

        Collision resolution techniques:
        - **Chaining:** Store multiple elements in linked lists
        - **Open addressing:** Find alternative slots (linear/quadratic probing)

        Hash tables provide the fastest average-case performance for dictionary operations and are fundamental to many applications including databases, caches, and programming language implementations.`,
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
        - Developed between 1000-1930 by physicists like Planck, Einstein, Bohr, Heisenberg, and Schrödinger
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
          section.content.toLowerCase().includes(lowercaseQuery),
      ) ||
      note.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
