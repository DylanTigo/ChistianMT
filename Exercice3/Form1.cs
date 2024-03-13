using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Exercice3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }
        private String signe = "";

        private void checkedListBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            int value = 0;
            if(signe == "")
            {
                label4.Text = "Pas de signe";
                label4.ForeColor = Color.Red;
            }
            else if (int.TryParse(textBox1.Text, out int numbre1) && int.TryParse(textBox2.Text, out int numbre2))
            {
                switch (signe)
                {
                    case "+":
                        value = numbre1 + numbre2;
                        break;
                    case "-":
                        value = numbre1 - numbre2;
                        break;
                    case "*":
                        value = numbre1 * numbre2;
                        break;
                    case "/":
                        value = numbre1 / numbre2;
                        break;
                }
                label4.Text = value.ToString();
            }
            else
            {
                label4.Text = "Entrer un nombre valide";
                label4.ForeColor = Color.Red;
            }
        }
        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {
            signe = "+";
            label5.Text = "+";
        }

        private void radioButton2_CheckedChanged(object sender, EventArgs e)
        {
            signe = "-";
            label5.Text = "-";
        }

        private void radioButton3_CheckedChanged(object sender, EventArgs e)
        {
            signe = "*";
            label5.Text = "*";
        }

        private void radioButton4_CheckedChanged(object sender, EventArgs e)
        {
            signe = "/";
            label5.Text = "/";
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            label4.ForeColor = Color.Black;
            textBox1.Focus();
            radioButton1.Checked = false; 
            radioButton2.Checked = false;
            radioButton3.Checked = false; 
            radioButton4.Checked = false;
            label4.Text = "";
            label5.Text = "";
        }
    }
    }
