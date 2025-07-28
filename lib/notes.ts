// This is a mock notes service
// In a real app, you would fetch this data from an API or database

export interface Note {
  id: string
  title: string
  description: string
  content: string
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
    content: `Calculus is a branch of mathematics that deals with the study of rates of change and accumulation. It was developed independently by Isaac Newton and Gottfried Wilhelm Leibniz in the late 17th century.

    The two main branches of calculus are differential calculus and integral calculus. Differential calculus deals with the study of rates at which quantities change, using the concept of the derivative. Integral calculus deals with the study of the area beneath a curve, using the concept of the integral.

    A fundamental concept in calculus is the limit. The limit of a function f(x) as x approaches a value c is the value that f(x) gets arbitrarily close to as x gets arbitrarily close to c. This is written as lim(x→c) f(x) = L, where L is the limit.

    The derivative of a function f(x) with respect to x is defined as the limit of the difference quotient [f(x+h) - f(x)]/h as h approaches 0. It represents the rate of change of the function at a particular point.

    The integral of a function f(x) from a to b is defined as the limit of the sum of the areas of rectangles under the curve as the width of the rectangles approaches 0. It represents the accumulated change over an interval.`,
    category: "math",
    categoryName: "Mathematics",
    date: "June 15, 2023",
    tags: ["Calculus", "Mathematics", "Derivatives", "Integrals"],
  },
  {
    id: "2",
    title: "World History: 20th Century",
    description: "Major events and developments of the 20th century",
    content: `The 20th century was a period of enormous changes in politics, technology, economics, and culture. It saw two world wars, the rise and fall of communism, the development of nuclear weapons, and the beginning of the digital age.

    World War I (1914-1918) was triggered by the assassination of Archduke Franz Ferdinand of Austria. It involved the major powers of Europe, divided into the Allied Powers and the Central Powers. The war resulted in the collapse of four empires and set the stage for World War II.

    The Great Depression was a severe worldwide economic depression that began in the United States after a major fall in stock prices in 1929. It was the longest, deepest, and most widespread depression of the 20th century.

    World War II (1939-1945) was a global war that involved the vast majority of the world's nations. It was the deadliest conflict in human history, marked by mass deaths of civilians, including the Holocaust and the only use of nuclear weapons in warfare.

    The Cold War was a period of geopolitical tension between the Soviet Union and the United States and their respective allies, the Eastern Bloc and the Western Bloc, after World War II. It was characterized by proxy wars, an arms race, and ideological competition.

    The latter part of the century saw the fall of the Berlin Wall, the collapse of the Soviet Union, and the rise of the internet and digital technology, which have transformed how people live, work, and communicate.`,
    category: "history",
    categoryName: "History",
    date: "July 3, 2023",
    tags: ["History", "20th Century", "World Wars", "Cold War"],
  },
  {
    id: "3",
    title: "Organic Chemistry Fundamentals",
    description: "Basic principles and concepts in organic chemistry",
    content: `Organic chemistry is the study of the structure, properties, composition, reactions, and preparation of carbon-containing compounds. These compounds may contain any number of other elements, including hydrogen, nitrogen, oxygen, halogens, phosphorus, silicon, and sulfur.

    Carbon atoms can form stable bonds with other carbon atoms and with atoms of other elements. This property allows carbon to form a vast number of compounds, more than any other element.

    Hydrocarbons are organic compounds consisting entirely of hydrogen and carbon. They can be classified as alkanes (single bonds only), alkenes (at least one double bond), alkynes (at least one triple bond), and aromatic hydrocarbons (containing a benzene ring).

    Functional groups are specific groups of atoms within molecules that are responsible for the characteristic chemical reactions of those molecules. Common functional groups include alcohols (-OH), aldehydes (-CHO), ketones (C=O), carboxylic acids (-COOH), and amines (-NH2).

    Isomers are compounds with the same molecular formula but different structural formulas. There are several types of isomers, including structural isomers (different connectivity), stereoisomers (same connectivity but different spatial arrangement), and conformational isomers (can be interconverted by rotation around single bonds).

    Organic reactions are chemical reactions involving organic compounds. They can be classified based on the type of reaction (addition, elimination, substitution, rearrangement) or the type of reagent (nucleophile, electrophile, radical).`,
    category: "science",
    categoryName: "Science",
    date: "August 12, 2023",
    tags: ["Chemistry", "Organic Chemistry", "Carbon Compounds", "Functional Groups"],
  },
  {
    id: "4",
    title: "Computer Science: Data Structures",
    description: "Common data structures and their applications",
    content: `Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Different kinds of data structures are suited to different kinds of applications.

    Arrays are a collection of elements identified by index or key. They are stored in contiguous memory locations, which makes accessing elements by their index very efficient. However, inserting or deleting elements can be inefficient because it may require shifting elements.

    Linked lists consist of nodes where each node contains a data field and a reference (link) to the next node in the sequence. They allow for efficient insertion or removal of elements from any position in the list. However, accessing elements is less efficient than in arrays because you have to traverse from the head.

    Stacks are a collection of elements with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element. They follow the Last In, First Out (LIFO) principle.

    Queues are similar to stacks but follow the First In, First Out (FIFO) principle. The two principal operations are enqueue, which adds an element to the end of the queue, and dequeue, which removes the element from the front of the queue.

    Trees are hierarchical data structures with a root value and subtrees of children, represented as a set of linked nodes. Binary trees are a type of tree where each node has at most two children. Binary search trees are binary trees with the property that the key in each node is greater than all keys in its left subtree and less than all keys in its right subtree.

    Hash tables use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. They provide efficient insertion, deletion, and lookup operations.`,
    category: "cs",
    categoryName: "Computer Science",
    date: "September 5, 2023",
    tags: ["Computer Science", "Data Structures", "Algorithms", "Programming"],
  },
  {
    id: "5",
    title: "English Literature: Modern Classics",
    description: "Analysis of influential works in modern literature",
    content: `Modern literature refers to the literature of the late 19th and early 20th centuries, characterized by a break with traditional ways of writing. It was influenced by industrialization, urbanization, new technologies, and the horrors of World War I.

    James Joyce's "Ulysses" (1922) is considered one of the most important works of modernist literature. It uses a stream-of-consciousness technique and parallels with Homer's "Odyssey" to tell the story of a day in the life of Leopold Bloom in Dublin.

    Virginia Woolf's "Mrs. Dalloway" (1925) also uses stream of consciousness and explores the thoughts and memories of the protagonist, Clarissa Dalloway, as she prepares for a party she is hosting. The novel deals with themes of mental illness, existentialism, and feminism.

    F. Scott Fitzgerald's "The Great Gatsby" (1925) is a critique of the American Dream in the Jazz Age. It tells the story of the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.

    George Orwell's "1984" (1949) is a dystopian novel that explores the dangers of totalitarianism. It introduces concepts such as Big Brother, doublethink, and thoughtcrime, which have become part of our cultural lexicon.

    Gabriel García Márquez's "One Hundred Years of Solitude" (1967) is a landmark of magical realism. It tells the multi-generational story of the Buendía family in the fictional town of Macondo.

    These works continue to be studied and appreciated for their innovative techniques, complex characters, and profound insights into the human condition.`,
    category: "literature",
    categoryName: "Literature",
    date: "October 20, 2023",
    tags: ["Literature", "Modern Classics", "Novels", "Literary Analysis"],
  },
  {
    id: "6",
    title: "Physics: Quantum Mechanics",
    description: "Introduction to the principles of quantum mechanics",
    content: `Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It was developed in the early 20th century when classical physics could not explain certain phenomena.

    One of the key principles of quantum mechanics is wave-particle duality, which suggests that all particles exhibit both wave and particle properties. This was demonstrated by the double-slit experiment, where electrons showed interference patterns characteristic of waves, but were detected as discrete particles.

    The Heisenberg Uncertainty Principle states that there is a fundamental limit to the precision with which complementary variables, such as position and momentum, can be known simultaneously. This is not due to limitations in measurement technology, but is inherent in the nature of quantum systems.

    Quantum superposition is the principle that a quantum system can exist in multiple states simultaneously until it is measured. This is illustrated by Schrödinger's cat thought experiment, where a cat in a box is simultaneously alive and dead until the box is opened.

    Quantum entanglement is a phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others, regardless of the distance separating them. Einstein referred to this as "spooky action at a distance."

    The mathematical framework of quantum mechanics includes wave functions, which provide the probability of finding a particle in a particular state, and operators, which represent observable quantities such as position, momentum, and energy.`,
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
      note.content.toLowerCase().includes(lowercaseQuery) ||
      note.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
