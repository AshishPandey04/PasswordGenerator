
# Password Generator 🔐

This is a **React-based Password Generator** that allows users to create strong, customizable passwords. Users can adjust the password length, choose whether to include numbers or special characters, and copy the generated password to the clipboard.

## Features 🌟

- **Password Length Control**: Set password length between 6 and 25 characters.
- **Optional Numbers**: Toggle the inclusion of numeric digits (0-9).
- **Optional Special Characters**: Toggle the inclusion of special characters (e.g., @&%$*).
- **Copy to Clipboard**: Easily copy the generated password with a single click.
- **Dynamic Generation**: The password updates automatically whenever the settings change.

## How to Use 📋

1. **Set Password Length**: Use the slider to adjust the password length (default is 8).
2. **Select Options**:
   - Check the box to include numbers in the password.
   - Check the box to include special characters.
3. **Copy Password**: Click the "Copy" button to copy the generated password to your clipboard.

## Installation 🛠️

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/AshishPandey04/PasswordGenerator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ReactPasswordGenerator
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`.

## Code Explanation 📜

- **useState Hooks**: Manage the state for password, length, numberAllowed, and characterAllowed.
- **useRef Hook**: Used to reference the password input field for easy copying.
- **useCallback Hook**: Ensures that the password generator and copy functions are memoized, improving performance.
- **useEffect Hook**: Automatically generates a new password whenever the length or character inclusion options change.

## Tech Stack 💻

- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and modern styling.
- **JavaScript (ES6)**: Core functionality for password generation.



---

