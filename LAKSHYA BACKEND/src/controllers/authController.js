export const signupUser = (req, res) => {
  const { name, email, password } = req.body;

  console.log("📩 Signup request:", req.body);

  // TODO: Backend developer DB मध्ये save करेल
  res.status(200).json({ message: "User registered successfully" });
};
